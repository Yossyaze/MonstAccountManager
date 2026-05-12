import './style.css';
import { ICONS } from './constants/icons.js';
import { generateId, esc, showToast } from './utils/helpers.js';
import { storageService } from './services/storage.js';
import { backupService } from './services/backup.js';

// コンポーネントのインポート
import { renderSidebar } from './components/Sidebar.js';
import { renderHeader } from './components/Header.js';
import { renderDashboardView } from './components/DashboardView.js';
import { renderAccountsView } from './components/AccountsView.js';
import { renderDevicesView, renderAccountSelector } from './components/DeviceView.js';
import { renderSettingsView, renderPresets } from './components/SettingsView.js';
import { renderAccountModal, renderDeviceModal } from './components/Modals.js';

// --- 状態管理 ---
let accounts = storageService.loadAccounts();
let devices = storageService.loadDevices();
let devicePresets = storageService.loadPresets();
let currentTheme = storageService.loadTheme();
let allCharacters = [];
let searchQuery = '';
let currentNav = 'dashboard';
let editingIndex = null;
let editingDeviceIndex = null;

// --- 初期化 ---
async function init() {
  // アカウントID付与 (既存データ互換性)
  let changed = false;
  accounts = accounts.map(a => {
    if (!a.id) {
      a.id = generateId();
      changed = true;
    }
    return a;
  });
  if (changed) storageService.saveAccounts(accounts);

  applyTheme();
  renderApp();
  
  try {
    const res = await fetch('/data/characters.json');
    allCharacters = await res.json();
  } catch (e) {
    console.error('キャラクターDB読み込み失敗:', e);
  }

  // グローバルクリックイベントリスナー
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.char-search-wrap')) {
      document.querySelectorAll('.search-dropdown.open').forEach(dd => dd.classList.remove('open'));
    }
  });
}

// --- メインレンダリング ---
function renderApp() {
  const app = document.querySelector('#app');
  const filtered = accounts.filter(a => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return a.name.toLowerCase().includes(q) ||
      (a.characters || []).some(c => c.name.toLowerCase().includes(q));
  });

  app.innerHTML = `
    ${renderSidebar(currentNav)}
    ${renderHeader(currentNav, searchQuery, accounts, currentTheme)}
    <main class="main-content">
      ${renderMainContent(filtered)}
    </main>
    <button class="fab" id="fab-add" title="アカウントを追加">${ICONS.plus}</button>
    ${renderAccountModal()}
    ${renderDeviceModal()}
  `;

  bindEvents();
}

function renderMainContent(filteredAccounts) {
  switch (currentNav) {
    case 'dashboard':
      return renderDashboardView(accounts, devices);
    case 'accounts':
      return renderAccountsView(filteredAccounts, searchQuery);
    case 'devices':
      return renderDevicesView(devices, accounts);
    case 'settings':
      return renderSettingsView(devicePresets);
    default:
      return '';
  }
}

// --- イベントバインド ---
function bindEvents() {
  // 検索
  const searchEl = document.getElementById('global-search');
  if (searchEl) {
    searchEl.addEventListener('input', e => {
      searchQuery = e.target.value;
      renderApp();
      document.getElementById('global-search')?.focus();
    });
  }

  // ナビゲーション
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      currentNav = item.dataset.nav;
      renderApp();
    });
  });

  // テーマ切替
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    storageService.saveTheme(currentTheme);
    applyTheme();
    renderApp();
  });

  // バックアップ・エクスポート
  document.getElementById('export-btn')?.addEventListener('click', () => {
    backupService.exportData({ accounts, devices, devicePresets });
    showToast('すべてのデータをエクスポートしました');
  });

  // インポート
  const importBtn = document.getElementById('import-btn');
  const importFile = document.getElementById('import-file');
  importBtn?.addEventListener('click', () => importFile?.click());
  importFile?.addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = await backupService.importData(file);
      if (data.accounts && Array.isArray(data.accounts)) {
        accounts = data.accounts;
        if (data.devices) devices = data.devices;
        if (data.devicePresets) devicePresets = data.devicePresets;
        saveAll();
        showToast('すべてのデータをインポートしました');
      } else if (Array.isArray(data)) {
        accounts = data;
        storageService.saveAccounts(accounts);
        renderApp();
        showToast('アカウント情報をインポートしました');
      } else {
        throw new Error('Invalid format');
      }
    } catch (err) {
      alert(err.message);
    }
  });

  // アカウント追加 FAB
  document.getElementById('fab-add')?.addEventListener('click', openAccountModal);

  // モーダル制御
  document.getElementById('modal-close')?.addEventListener('click', closeAccountModal);
  document.getElementById('modal')?.addEventListener('click', e => {
    if (e.target.id === 'modal') closeAccountModal();
  });

  // アカウント保存
  document.getElementById('save-btn')?.addEventListener('click', () => {
    const name = document.getElementById('f-name')?.value.trim();
    if (!name) return;
    const monstId = document.getElementById('f-monst-id')?.value.trim() || '';
    const mixiId = document.getElementById('f-mixi-id')?.value.trim() || '';
    const canLend = document.getElementById('f-can-lend')?.checked || false;

    if (editingIndex !== null) {
      accounts[editingIndex] = { ...accounts[editingIndex], name, monstId, mixiId, canLend };
      showToast('更新しました');
    } else {
      accounts.push({ id: generateId(), name, monstId, mixiId, canLend, device: '', characters: [] });
      showToast('追加しました');
    }
    storageService.saveAccounts(accounts);
    closeAccountModal();
    renderApp();
  });

  // 編集・削除・コピー（イベント委譲を使わず、各要素にバインド）
  document.querySelectorAll('.edit-account').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      editingIndex = idx;
      const acc = accounts[idx];
      document.getElementById('modal')?.classList.add('visible');
      document.getElementById('modal-title').textContent = 'アカウント編集';
      document.getElementById('save-btn').textContent = '更新する';
      document.getElementById('f-name').value = acc.name;
      document.getElementById('f-monst-id').value = acc.monstId || '';
      document.getElementById('f-mixi-id').value = acc.mixiId || '';
      document.getElementById('f-can-lend').checked = !!acc.canLend;
    });
  });

  document.querySelectorAll('.delete-account').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      if (confirm(`「${accounts[idx].name}」を削除しますか？`)) {
        accounts.splice(idx, 1);
        storageService.saveAccounts(accounts);
        renderApp();
      }
    });
  });

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.dataset.copy;
      navigator.clipboard.writeText(text).then(() => {
        showToast('コピーしました');
      });
    });
  });

  // キャラクター検索・追加
  document.querySelectorAll('.char-search-input').forEach(input => {
    input.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      const idx = e.target.dataset.index;
      const dd = document.getElementById(`dropdown-${idx}`);
      if (!dd) return;
      if (q.length < 1) { dd.classList.remove('open'); return; }

      const matches = allCharacters.filter(c => c.name.toLowerCase().includes(q)).slice(0, 10);
      if (matches.length === 0) { dd.classList.remove('open'); return; }

      dd.innerHTML = `
        <div class="dropdown-list">
          ${matches.map(c => `
            <div class="dropdown-item" data-id="${c.id}">
              <input type="checkbox" value="${c.id}" data-name="${esc(c.name)}" id="cb-${idx}-${c.id}" />
              <img src="https://img.gamewith.jp/article_tools/monst/gacha/${c.id}.jpg" class="dropdown-icon" />
              <label class="dropdown-name" for="cb-${idx}-${c.id}">${esc(c.name)}</label>
            </div>
          `).join('')}
        </div>
        <button class="dropdown-add-btn">選択したキャラを追加</button>
      `;
      dd.classList.add('open');

      dd.querySelector('.dropdown-add-btn')?.addEventListener('click', () => {
        const checked = Array.from(dd.querySelectorAll('input[type="checkbox"]:checked'));
        checked.forEach(cb => {
          if (!accounts[idx].characters.some(c => c.id === cb.value)) {
            accounts[idx].characters.push({ id: cb.value, name: cb.dataset.name });
          }
        });
        storageService.saveAccounts(accounts);
        renderApp();
      });
    });
  });

  // キャラ削除・お気に入り
  document.querySelectorAll('.remove-char').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const ai = btn.dataset.acc;
      const ci = btn.dataset.ci;
      accounts[ai].characters.splice(ci, 1);
      storageService.saveAccounts(accounts);
      renderApp();
    });
  });

  document.querySelectorAll('.char-icon-wrapper').forEach(w => {
    w.addEventListener('click', () => {
      const ai = w.dataset.acc;
      const ci = w.dataset.ci;
      if (ai !== undefined && ci !== undefined) {
        const ch = accounts[ai].characters[ci];
        ch.favorite = !ch.favorite;
        storageService.saveAccounts(accounts);
        renderApp();
      }
    });
  });

  // --- デバイス管理イベント ---
  document.getElementById('add-device-btn')?.addEventListener('click', () => {
    editingDeviceIndex = null;
    document.getElementById('device-modal')?.classList.add('visible');
  });

  document.getElementById('device-modal-close')?.addEventListener('click', () => {
    document.getElementById('device-modal')?.classList.remove('visible');
  });

  document.getElementById('device-save-btn')?.addEventListener('click', () => {
    const name = document.getElementById('d-name')?.value.trim();
    if (!name) return;
    const type = document.querySelector('input[name="d-type"]:checked')?.value || 'smartphone';

    if (editingDeviceIndex !== null) {
      devices[editingDeviceIndex].name = name;
      devices[editingDeviceIndex].type = type;
    } else {
      devices.push({ id: generateId(), name, type, slots: [] });
    }
    storageService.saveDevices(devices);
    renderApp();
    document.getElementById('device-modal')?.classList.remove('visible');
  });

  document.querySelectorAll('.edit-device').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      editingDeviceIndex = idx;
      const dev = devices[idx];
      document.getElementById('device-modal')?.classList.add('visible');
      document.getElementById('d-name').value = dev.name;
      const radio = document.querySelector(`input[name="d-type"][value="${dev.type || 'smartphone'}"]`);
      if (radio) radio.checked = true;
    });
  });

  document.querySelectorAll('.delete-device').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.index;
      if (confirm('削除しますか？')) {
        devices.splice(idx, 1);
        storageService.saveDevices(devices);
        renderApp();
      }
    });
  });

  document.querySelectorAll('.add-slot-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const di = btn.dataset.index;
      const name = prompt('アプリ名:');
      if (name) {
        devices[di].slots.push({ id: generateId(), name, accountId: null });
        storageService.saveDevices(devices);
        renderApp();
      }
    });
  });

  document.querySelectorAll('.slot-item.empty').forEach(item => {
    item.addEventListener('click', () => {
      const di = item.dataset.di;
      const si = item.dataset.si;
      const overlay = document.createElement('div');
      overlay.id = 'temp-selector-container';
      overlay.innerHTML = renderAccountSelector(di, si, devices, accounts);
      document.body.appendChild(overlay);

      overlay.querySelector('.close-selector')?.addEventListener('click', () => overlay.remove());
      overlay.querySelectorAll('.sel-item').forEach(sel => {
        sel.addEventListener('click', () => {
          const accId = sel.dataset.accId;
          devices[di].slots[si].accountId = accId;
          const acc = accounts.find(a => a.id === accId);
          if (acc) acc.device = devices[di].name;
          saveAll();
          overlay.remove();
        });
      });
    });
  });

  document.querySelectorAll('.eject-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const di = btn.dataset.di;
      const si = btn.dataset.si;
      const acc = accounts.find(a => a.id === devices[di].slots[si].accountId);
      if (acc) acc.device = '';
      devices[di].slots[si].accountId = null;
      saveAll();
    });
  });

  // 設定画面のイベント
  document.getElementById('add-preset-btn')?.addEventListener('click', () => {
    const val = document.getElementById('f-device')?.value.trim();
    if (val && !devicePresets.includes(val)) {
      devicePresets.push(val);
      storageService.savePresets(devicePresets);
      const container = document.getElementById('preset-container');
      if (container) container.innerHTML = renderPresets(devicePresets);
      document.getElementById('f-device').value = '';
    }
  });
  
  // プリセットチップ削除
  document.querySelectorAll('.remove-chip').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const val = btn.dataset.value;
      devicePresets = devicePresets.filter(p => p !== val);
      storageService.savePresets(devicePresets);
      const container = document.getElementById('preset-container');
      if (container) container.innerHTML = renderPresets(devicePresets);
    });
  });
}

function openAccountModal() {
  editingIndex = null;
  document.getElementById('modal')?.classList.add('visible');
  document.getElementById('modal-title').textContent = 'アカウント登録';
  document.getElementById('save-btn').textContent = '登録する';
  ['f-name', 'f-monst-id', 'f-mixi-id'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('f-can-lend').checked = false;
}

function closeAccountModal() {
  document.getElementById('modal')?.classList.remove('visible');
}

function saveAll() {
  storageService.saveAccounts(accounts);
  storageService.saveDevices(devices);
  storageService.savePresets(devicePresets);
  renderApp();
}

function applyTheme() {
  document.body.classList.toggle('light-mode', currentTheme === 'light');
}

init();
