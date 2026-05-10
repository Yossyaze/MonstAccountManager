import './style.css'

// --- SVGアイコン定義 ---
const ICONS = {
  dashboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  accounts: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  settings: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
  download: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  plus: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  more: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>`,
  copy: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,
  check: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  trash: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>`,
  empty: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="11" x2="23" y2="11"/></svg>`,
};

// --- 状態管理 ---
let accounts = JSON.parse(localStorage.getItem('monst_accounts')) || [];
let allCharacters = [];
let searchQuery = '';
let openMenuIndex = null; // 開いているカードメニューのインデックス

// --- 最大アイコン表示数 ---
const MAX_VISIBLE_CHARS = 14;

// --- 初期化 ---
async function init() {
  renderApp();
  try {
    const res = await fetch('/data/characters.json');
    allCharacters = await res.json();
  } catch (e) {
    console.error('キャラクターDB読み込み失敗:', e);
  }
  // グローバルクリックイベントリスナー (外部クリックで閉じる)
  document.addEventListener('click', (e) => {
    // カードメニューを閉じる
    if (openMenuIndex !== null && !e.target.closest('.card-menu-btn') && !e.target.closest('.card-actions-menu')) {
      openMenuIndex = null;
      document.querySelectorAll('.card-actions-menu').forEach(m => m.classList.remove('open'));
    }
    // キャラ検索ドロップダウンを閉じる
    if (!e.target.closest('.char-search-wrap')) {
      document.querySelectorAll('.search-dropdown.open').forEach(dd => dd.classList.remove('open'));
    }
  });
}

// --- ユーティリティ ---
function esc(str) {
  if (!str) return '';
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function formatId(id) {
  if (!id) return '---';
  return id.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function totalChars() {
  return accounts.reduce((sum, a) => sum + (a.characters ? a.characters.length : 0), 0);
}

// --- トースト通知 ---
function showToast(message, icon = '✓') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span>${esc(message)}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
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
    <!-- サイドバー -->
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-icon">M</div>
        <div class="brand-text">
          <h2>MONST</h2>
          <span>Account Manager</span>
        </div>
      </div>
      <div class="nav-item active" data-nav="dashboard">
        ${ICONS.dashboard}
        <span>ダッシュボード</span>
      </div>
      <div class="nav-item" data-nav="accounts">
        ${ICONS.accounts}
        <span>アカウント</span>
      </div>
      <div class="nav-item sidebar-footer" data-nav="settings">
        ${ICONS.settings}
        <span>設定</span>
      </div>
    </aside>

    <!-- ヘッダー -->
    <header class="top-header">
      <h1 class="page-title">ダッシュボード</h1>
      <div class="header-search">
        ${ICONS.search}
        <input type="text" id="global-search" placeholder="アカウント名・キャラ名で検索..." value="${esc(searchQuery)}" />
      </div>
      <div class="header-stats">
        <div class="stat-item">
          <div class="stat-value">${accounts.length}</div>
          <div class="stat-label">Accounts</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${totalChars()}</div>
          <div class="stat-label">Characters</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="btn-header" id="export-btn" title="エクスポート">${ICONS.download}</button>
        <button class="btn-header" id="import-btn" title="インポート">${ICONS.upload}</button>
        <input type="file" id="import-file" accept=".json" />
      </div>
    </header>

    <!-- メインコンテンツ -->
    <main class="main-content">
      <div class="account-grid">
        ${filtered.length === 0 ? renderEmpty() : filtered.map((a, i) => renderCard(a, i)).join('')}
      </div>
    </main>

    <!-- FAB -->
    <button class="fab" id="fab-add" title="アカウントを追加">${ICONS.plus}</button>

    <!-- モーダル -->
    <div class="modal-overlay" id="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>アカウント登録</h2>
          <button class="close-modal" id="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>アカウント名</label>
            <input type="text" id="f-name" placeholder="メイン、サブ1 など" />
          </div>
          <div class="form-group">
            <label>モンスト ID</label>
            <input type="text" id="f-monst-id" placeholder="123456789" />
          </div>
          <div class="form-group">
            <label>MIXI ID（メールアドレス）</label>
            <input type="text" id="f-mixi-id" placeholder="example@gmail.com" />
          </div>
          <div class="form-group">
            <label>使用端末</label>
            <input type="text" id="f-device" placeholder="iPhone 15, iPad など" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-primary" id="save-btn">登録する</button>
        </div>
      </div>
    </div>
  `;

  bindEvents();
}

// --- エンプティステート ---
function renderEmpty() {
  return `
    <div class="empty-state">
      <div class="empty-icon">${ICONS.empty}</div>
      <h3>${searchQuery ? '検索結果が見つかりません' : 'アカウント未登録'}</h3>
      <p>${searchQuery ? '別のキーワードをお試しください' : '右下の＋ボタンから最初のアカウントを追加しましょう'}</p>
    </div>
  `;
}

// --- カードレンダリング ---
function renderCard(account, index) {
  const chars = account.characters || [];
  const visible = chars.slice(0, MAX_VISIBLE_CHARS);
  const overflow = chars.length - MAX_VISIBLE_CHARS;

  return `
    <div class="account-card" data-index="${index}">
      <div class="card-top">
        <div class="account-name">${esc(account.name)}</div>
        <button class="card-menu-btn" data-menu="${index}">${ICONS.more}</button>
      </div>

      <div class="card-actions-menu ${openMenuIndex === index ? 'open' : ''}" id="menu-${index}">
        <button class="menu-action delete-account" data-index="${index}">${ICONS.trash} 削除する</button>
      </div>

      <div class="card-meta">
        <div class="meta-row">
          <span class="meta-label">Monst ID</span>
          <div class="meta-right">
            <span class="meta-value">${formatId(account.monstId)}</span>
            ${account.monstId ? `<button class="copy-btn" data-copy="${esc(account.monstId)}">${ICONS.copy}</button>` : ''}
          </div>
        </div>
        <div class="meta-row">
          <span class="meta-label">MIXI ID</span>
          <div class="meta-right">
            <span class="meta-value email">${esc(account.mixiId) || '---'}</span>
            ${account.mixiId ? `<button class="copy-btn" data-copy="${esc(account.mixiId)}">${ICONS.copy}</button>` : ''}
          </div>
        </div>
        <div class="meta-row">
          <span class="meta-label">端末</span>
          <div class="meta-right">
            <span class="meta-value device">${esc(account.device) || '---'}</span>
          </div>
        </div>
      </div>

      <div class="char-section">
        <div class="char-search-wrap">
          <input type="text" class="char-search-input" placeholder="キャラを追加..." data-index="${index}" />
          <div class="search-dropdown" id="dropdown-${index}"></div>
        </div>
        <div class="char-grid">
          ${visible.map((c, ci) => `
            <div class="char-icon-wrapper ${c.lendable ? 'lendable' : ''}" data-acc="${index}" data-ci="${ci}" title="${esc(c.name)}${c.lendable ? ' (貸出可)' : ''}">
              <img src="https://img.gamewith.jp/article_tools/monst/gacha/${c.id}.jpg" class="char-icon" onerror="this.src='https://img.gamewith.jp/article_tools/monst/gacha/1.jpg'" />
              ${c.lendable ? '<div class="lend-badge">L</div>' : ''}
              <div class="remove-char" data-acc="${index}" data-ci="${ci}">&times;</div>
            </div>
          `).join('')}
          ${overflow > 0 ? `<div class="char-overflow">+${overflow}</div>` : ''}
        </div>
      </div>
    </div>
  `;
}

// --- イベントバインド ---
function bindEvents() {
  // グローバル検索
  const searchEl = document.getElementById('global-search');
  if (searchEl) {
    searchEl.addEventListener('input', e => {
      searchQuery = e.target.value;
      renderApp();
      document.getElementById('global-search')?.focus();
    });
  }

  // FAB → モーダル表示
  document.getElementById('fab-add')?.addEventListener('click', () => {
    document.getElementById('modal')?.classList.add('visible');
  });

  // モーダル閉じる
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal')?.addEventListener('click', e => {
    if (e.target.id === 'modal') closeModal();
  });

  // アカウント保存
  document.getElementById('save-btn')?.addEventListener('click', () => {
    const name = document.getElementById('f-name')?.value.trim();
    if (!name) return;
    accounts.push({
      name,
      monstId: document.getElementById('f-monst-id')?.value.trim() || '',
      mixiId: document.getElementById('f-mixi-id')?.value.trim() || '',
      device: document.getElementById('f-device')?.value.trim() || '',
      characters: []
    });
    save();
    closeModal();
    showToast('アカウントを追加しました');
  });

  // カードメニュー
  document.querySelectorAll('.card-menu-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.menu);
      openMenuIndex = openMenuIndex === idx ? null : idx;
      // メニュー表示切替
      document.querySelectorAll('.card-actions-menu').forEach(m => m.classList.remove('open'));
      if (openMenuIndex !== null) {
        document.getElementById(`menu-${idx}`)?.classList.add('open');
      }
    });
  });

  // メニュー外クリックで閉じる処理は init で一括管理に変更

  // 削除
  document.querySelectorAll('.delete-account').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.index);
      if (confirm(`「${accounts[idx].name}」を削除しますか？`)) {
        accounts.splice(idx, 1);
        openMenuIndex = null;
        save();
        showToast('アカウントを削除しました');
      }
    });
  });

  // コピーボタン
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const text = btn.dataset.copy;
      navigator.clipboard.writeText(text).then(() => {
        btn.innerHTML = ICONS.check;
        btn.classList.add('copied');
        showToast('コピーしました');
        setTimeout(() => {
          btn.innerHTML = ICONS.copy;
          btn.classList.remove('copied');
        }, 1500);
      });
    });
  });

  // キャラ検索
  document.querySelectorAll('.char-search-input').forEach(input => {
    // Escキーで閉じる
    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        const idx = input.dataset.index;
        const dd = document.getElementById(`dropdown-${idx}`);
        if (dd) dd.classList.remove('open');
        input.value = '';
        input.blur();
      }
    });

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
              <img src="https://img.gamewith.jp/article_tools/monst/gacha/${c.id}.jpg" class="dropdown-icon" onerror="this.style.display='none'" />
              <label class="dropdown-name" for="cb-${idx}-${c.id}">${esc(c.name)}</label>
            </div>
          `).join('')}
        </div>
        <button class="dropdown-add-btn">選択したキャラを追加</button>
      `;
      dd.classList.add('open');

      // ドロップダウンアイテムクリックでチェックボックストグル
      dd.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', ev => {
          if (ev.target.tagName === 'INPUT' || ev.target.tagName === 'LABEL') return;
          const cb = item.querySelector('input[type="checkbox"]');
          cb.checked = !cb.checked;
          updateAddBtnText();
        });
        item.querySelector('input').addEventListener('change', updateAddBtnText);
      });

      function updateAddBtnText() {
        const count = dd.querySelectorAll('input[type="checkbox"]:checked').length;
        const btn = dd.querySelector('.dropdown-add-btn');
        if (btn) btn.textContent = count > 0 ? `${count}体のキャラを追加` : '選択して追加';
      }

      // 一括追加
      dd.querySelector('.dropdown-add-btn')?.addEventListener('click', () => {
        const checked = Array.from(dd.querySelectorAll('input[type="checkbox"]:checked'));
        if (checked.length === 0) return;
        checked.forEach(cb => {
          if (!accounts[idx].characters.some(c => c.id === cb.value)) {
            accounts[idx].characters.push({ id: cb.value, name: cb.dataset.name });
          }
        });
        save();
        showToast(`${checked.length}体のキャラを追加しました`);
        // 追加後はクリアして閉じる
        const inputEl = document.querySelector(`.char-search-input[data-index="${idx}"]`);
        if (inputEl) {
          inputEl.value = '';
          inputEl.focus();
        }
        dd.classList.remove('open');
      });
    });
  });

  // キャラ削除
  document.querySelectorAll('.remove-char').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const ai = parseInt(btn.dataset.acc);
      const ci = parseInt(btn.dataset.ci);
      accounts[ai].characters.splice(ci, 1);
      save();
    });
  });

  // 貸しモントグル
  document.querySelectorAll('.char-icon-wrapper').forEach(w => {
    w.addEventListener('click', () => {
      const ai = w.dataset.acc;
      const ci = w.dataset.ci;
      if (ai !== undefined && ci !== undefined) {
        const ch = accounts[ai].characters[ci];
        ch.lendable = !ch.lendable;
        save();
        showToast(ch.lendable ? '貸出可に設定しました' : '貸出可を解除しました');
      }
    });
  });

  // エクスポート
  document.getElementById('export-btn')?.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(accounts, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `monst_accounts_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showToast('エクスポートしました');
  });

  // インポート
  document.getElementById('import-btn')?.addEventListener('click', () => {
    document.getElementById('import-file')?.click();
  });

  document.getElementById('import-file')?.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        if (Array.isArray(data)) {
          accounts = data;
          save();
          showToast('インポートが完了しました');
        }
      } catch { alert('不正な形式のファイルです'); }
    };
    reader.readAsText(file);
  });
}

function closeModal() {
  document.getElementById('modal')?.classList.remove('visible');
  ['f-name', 'f-monst-id', 'f-mixi-id', 'f-device'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function save() {
  localStorage.setItem('monst_accounts', JSON.stringify(accounts));
  renderApp();
}

// --- 起動 ---
init();
