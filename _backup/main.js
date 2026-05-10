import { AccountService } from './js/accountService.js';
import { UIComponents } from './js/uiComponents.js';

// DOM Elements
const accountList = document.getElementById('account-list');
const addBtn = document.getElementById('add-account-btn');
const modal = document.getElementById('account-modal');
const form = document.getElementById('account-form');
const cancelBtn = document.getElementById('cancel-btn');
const exportBtn = document.getElementById('export-btn');
const importBtn = document.getElementById('import-btn');
const importFileInput = document.getElementById('import-file');
const modalTitle = document.getElementById('modal-title');
const charHiddenInput = document.getElementById('characters');
const charSearchInput = document.getElementById('char-search');
const charSuggestions = document.getElementById('char-suggestions');
const selectedCharsContainer = document.getElementById('selected-characters');

let characterDB = [];
let currentSelectedChars = []; // 現在編集中のアカウントのキャラリスト

// Initialize
async function init() {
  renderAccounts();
  
  // Load character database
  characterDB = await UIComponents.fetchCharacters();
  renderAccounts(); // データを読み込んだ後に再描画してアイコンを表示
  
  addBtn.addEventListener('click', () => openModal());
  cancelBtn.addEventListener('click', closeModal);
  form.addEventListener('submit', handleFormSubmit);
  
  exportBtn.addEventListener('click', handleExport);
  importBtn.addEventListener('click', () => importFileInput.click());
  importFileInput.addEventListener('change', handleImport);
  
  // Close modal on click outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Copy buttons (delegation)
  accountList.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('.copy-btn');
    if (copyBtn) {
      const text = copyBtn.dataset.copy;
      navigator.clipboard.writeText(text).then(() => {
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
        }, 2000);
      });
    }
  });

  // Character suggestions logic
  charSearchInput.addEventListener('input', handleCharacterSearch);
  document.addEventListener('click', (e) => {
    if (!charSearchInput.contains(e.target) && !charSuggestions.contains(e.target)) {
      charSuggestions.classList.remove('active');
    }
  });
}

function renderAccounts() {
  const accounts = AccountService.getAll();
  accountList.innerHTML = '';
  
  if (accounts.length === 0) {
    accountList.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);">
        <p>アカウントが登録されていません。</p>
        <p style="font-size: 0.9rem;">右上の「アカウント追加」から登録してください。</p>
      </div>
    `;
    return;
  }
  
  accounts.forEach(account => {
    const card = UIComponents.createAccountCard(
      account, 
      characterDB,
      (acc) => openModal(acc), // Edit
      (id) => {                // Delete
        AccountService.delete(id);
        renderAccounts();
      }
    );
    accountList.appendChild(card);
  });
}

function renderSelectedChars() {
  selectedCharsContainer.innerHTML = '';
  currentSelectedChars.forEach((char, index) => {
    const chip = UIComponents.createCharChip(char, () => {
      currentSelectedChars.splice(index, 1);
      renderSelectedChars();
    });
    selectedCharsContainer.appendChild(chip);
  });
  
  // 隠しフィールドを更新（保存用）
  charHiddenInput.value = currentSelectedChars.map(c => c.name).join(', ');
}

function openModal(account = null) {
  modal.classList.add('active');
  if (account) {
    modalTitle.textContent = 'アカウント編集';
    document.getElementById('account-id').value = account.id;
    document.getElementById('name').value = account.name;
    document.getElementById('mixiId').value = account.mixiId;
    document.getElementById('monstId').value = account.monstId;
    document.getElementById('appName').value = account.appName;
    document.getElementById('device').value = account.device;
    document.getElementById('isKashimon').checked = account.isKashimon;

    // キャラの文字列をリストに変換してチップを表示
    const charNames = account.characters ? account.characters.split(',').map(s => s.trim()).filter(s => s) : [];
    currentSelectedChars = charNames.map(name => {
      const found = characterDB.find(c => c.name === name);
      return found || { name, iconUrl: null };
    });
  } else {
    modalTitle.textContent = 'アカウント追加';
    form.reset();
    document.getElementById('account-id').value = '';
    currentSelectedChars = [];
  }
  
  renderSelectedChars();
  charSearchInput.value = '';
}

function closeModal() {
  modal.classList.remove('active');
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    mixiId: document.getElementById('mixiId').value,
    monstId: document.getElementById('monstId').value,
    appName: document.getElementById('appName').value,
    device: document.getElementById('device').value,
    characters: document.getElementById('characters').value,
    isKashimon: document.getElementById('isKashimon').checked,
  };
  
  const id = document.getElementById('account-id').value;
  
  if (id) {
    AccountService.update(id, formData);
  } else {
    AccountService.add(formData);
  }
  
  closeModal();
  renderAccounts();
}

function handleCharacterSearch() {
  const value = charSearchInput.value.trim();
  
  if (value.length < 1) {
    charSuggestions.classList.remove('active');
    return;
  }
  
  const matches = characterDB.filter(char => 
    char.name.toLowerCase().includes(value.toLowerCase())
  ).slice(0, 10);
  
  if (matches.length > 0) {
    charSuggestions.innerHTML = '';
    matches.forEach(char => {
      const item = UIComponents.createSuggestionItem(char, (selected) => {
        currentSelectedChars.push(selected);
        renderSelectedChars();
        charSearchInput.value = '';
        charSuggestions.classList.remove('active');
        charSearchInput.focus();
      });
      charSuggestions.appendChild(item);
    });
    charSuggestions.classList.add('active');
  } else {
    charSuggestions.classList.remove('active');
  }
}

function handleExport() {
  const accounts = AccountService.getAll();
  const dataStr = JSON.stringify(accounts, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `monst_accounts_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function handleImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const accounts = JSON.parse(event.target.result);
      if (Array.isArray(accounts)) {
        if (confirm('既存のデータを上書きしてよろしいですか？（現在のデータは失われます）')) {
          localStorage.setItem('monst_accounts', JSON.stringify(accounts));
          renderAccounts();
          alert('インポートが完了しました。');
        }
      } else {
        throw new Error('Invalid format');
      }
    } catch (err) {
      alert('ファイルの読み込みに失敗しました。正しい形式のJSONファイルを選択してください。');
    }
    importFileInput.value = '';
  };
  reader.readAsText(file);
}

// Start the app
init();
