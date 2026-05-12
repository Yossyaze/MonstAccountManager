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
  edit: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  empty: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="11" x2="23" y2="11"/></svg>`,
  star: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"/></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  devices: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  smartphone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  tablet: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  monitor: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0a2 2 0 0 1 2 2v1H2v-1a2 2 0 0 1 2-2"/></svg>`,
};

// --- 状態管理 ---
let accounts = JSON.parse(localStorage.getItem('monst_accounts')) || [];
let allCharacters = [];
let searchQuery = '';
let editingIndex = null; // 編集中のアカウントのインデックス
let editingDeviceIndex = null; // 編集中のデバイスのインデックス
let devicePresets = JSON.parse(localStorage.getItem('monst_device_presets')) || ['iPhone', 'iPad', 'Android'];
let currentTheme = localStorage.getItem('monst_theme') || 'dark';
let currentNav = 'dashboard';
let devices = JSON.parse(localStorage.getItem('monst_devices')) || [];

// --- 最大アイコン表示数 ---
const MAX_VISIBLE_CHARS = 14;

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
  if (changed) save();

  applyTheme();
  renderApp();
  try {
    const res = await fetch('/data/characters.json');
    allCharacters = await res.json();
  } catch (e) {
    console.error('キャラクターDB読み込み失敗:', e);
  }
  // グローバルクリックイベントリスナー (外部クリックで閉じる)
  document.addEventListener('click', (e) => {
    // キャラ検索ドロップダウンを閉じる
    if (!e.target.closest('.char-search-wrap')) {
      document.querySelectorAll('.search-dropdown.open').forEach(dd => dd.classList.remove('open'));
    }
  });
}

// --- ユーティリティ ---
function generateId() {
  return crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15);
}
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
      <div class="nav-item ${currentNav === 'dashboard' ? 'active' : ''}" data-nav="dashboard">
        ${ICONS.dashboard}
        <span>ダッシュボード</span>
      </div>
      <div class="nav-item ${currentNav === 'accounts' ? 'active' : ''}" data-nav="accounts">
        ${ICONS.accounts}
        <span>アカウント</span>
      </div>
      <div class="nav-item ${currentNav === 'devices' ? 'active' : ''}" data-nav="devices">
        ${ICONS.devices}
        <span>デバイス管理</span>
      </div>
      <div class="nav-item sidebar-footer ${currentNav === 'settings' ? 'active' : ''}" data-nav="settings">
        ${ICONS.settings}
        <span>設定</span>
      </div>
    </aside>

    <!-- ヘッダー -->
    <header class="top-header">
      <h1 class="page-title">${getPageTitle()}</h1>
      <div class="header-search">
        ${ICONS.search}
        <input type="text" id="global-search" placeholder="検索..." value="${esc(searchQuery)}" />
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
        <button class="btn-header" id="theme-toggle" title="テーマ切り替え">
          ${currentTheme === 'dark' ? ICONS.sun : ICONS.moon}
        </button>
        <button class="btn-header" id="export-btn" title="エクスポート">${ICONS.download}</button>
        <button class="btn-header" id="import-btn" title="インポート">${ICONS.upload}</button>
        <input type="file" id="import-file" accept=".json" />
      </div>
    </header>

    <!-- メインコンテンツ -->
    <main class="main-content">
      ${renderMainContent(filtered)}
    </main>

    <!-- FAB -->
    <button class="fab" id="fab-add" title="アカウントを追加">${ICONS.plus}</button>

    <!-- アカウントモーダル -->
    <div class="modal-overlay" id="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="modal-title">アカウント登録</h2>
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
            <label class="form-check">
              <input type="checkbox" id="f-can-lend" />
              <span>貸しモン可能アカウント</span>
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-primary" id="save-btn">登録する</button>
        </div>
      </div>
    </div>

    <!-- デバイスモーダル -->
    <div class="modal-overlay" id="device-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="device-modal-title">デバイス登録</h2>
          <button class="close-modal" id="device-modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>デバイス名</label>
            <input type="text" id="d-name" placeholder="iPhone 15 Pro, iPad Air など" />
          </div>
          <div class="form-group">
            <label>端末タイプ</label>
            <div class="device-type-selector">
              <label class="type-option">
                <input type="radio" name="d-type" value="smartphone" checked />
                <div class="type-card">
                  ${ICONS.smartphone}
                  <span>スマホ</span>
                </div>
              </label>
              <label class="type-option">
                <input type="radio" name="d-type" value="tablet" />
                <div class="type-card">
                  ${ICONS.tablet}
                  <span>タブレット</span>
                </div>
              </label>
              <label class="type-option">
                <input type="radio" name="d-type" value="monitor" />
                <div class="type-card">
                  ${ICONS.monitor}
                  <span>ノートPC</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-primary" id="device-save-btn">保存する</button>
        </div>
      </div>
    </div>
  `;

  bindEvents();
}

function getPageTitle() {
  switch (currentNav) {
    case 'dashboard': return 'ダッシュボード';
    case 'accounts': return 'アカウント一覧';
    case 'devices': return 'デバイス管理';
    case 'settings': return '設定';
    default: return 'MONST';
  }
}

function renderMainContent(filtered) {
  if (currentNav === 'dashboard') {
    return renderDashboard();
  }
  if (currentNav === 'devices') {
    return renderDevicesView();
  }
  // デフォルトはアカウント一覧
  return `
    <div class="account-grid">
      ${filtered.length === 0 ? renderEmpty() : filtered.map((a, i) => renderCard(a, i)).join('')}
    </div>
  `;
}

function renderDashboard() {
  // 重要キャラ（お気に入り）の集計
  const favoriteChars = accounts.flatMap((acc) =>
    (acc.characters || [])
      .filter(c => c.favorite)
      .map(c => ({ ...c, accountName: acc.name }))
  );

  const totalSlots = devices.reduce((sum, d) => sum + (d.slots?.length || 0), 0);
  const occupiedSlots = devices.reduce((sum, d) => sum + (d.slots?.filter(s => s.accountId)?.length || 0), 0);

  return `
    <div class="dashboard-view">
      <!-- 統計カード -->
      <div class="stats-grid">
        <div class="stat-card-premium purple">
          <div class="stat-icon">${ICONS.accounts}</div>
          <div class="stat-info">
            <span class="stat-label">総アカウント</span>
            <span class="stat-value-big">${accounts.length}</span>
          </div>
        </div>
        <div class="stat-card-premium amber">
          <div class="stat-icon">${ICONS.star}</div>
          <div class="stat-info">
            <span class="stat-label">総所持キャラ</span>
            <span class="stat-value-big">${totalChars()}</span>
          </div>
        </div>
        <div class="stat-card-premium green">
          <div class="stat-icon">${ICONS.star}</div>
          <div class="stat-info">
            <span class="stat-label">重要キャラ</span>
            <span class="stat-value-big">${favoriteChars.length}</span>
          </div>
        </div>
        <div class="stat-card-premium blue">
          <div class="stat-icon">${ICONS.devices}</div>
          <div class="stat-info">
            <span class="stat-label">スロット稼働</span>
            <span class="stat-value-big">${occupiedSlots}<small>/${totalSlots}</small></span>
          </div>
        </div>
      </div>

      <div class="dashboard-grid">
        <!-- 重要キャラギャラリー -->
        <section class="dashboard-section gallery">
          <div class="section-header">
            <h3>重要キャラ（お気に入り）</h3>
            <div class="section-badge">${favoriteChars.length}</div>
          </div>
          <div class="lendable-gallery">
            ${favoriteChars.length === 0 ? `
              <div class="empty-placeholder">
                <p>お気に入り登録されたキャラはいません</p>
                <small>アカウント一覧の各キャラを長押し（またはクリック）で登録できます</small>
              </div>
            ` : favoriteChars.map(c => `
              <div class="lend-item" title="${esc(c.name)} (${esc(c.accountName)})">
                <img src="https://img.gamewith.jp/article_tools/monst/gacha/${c.id}.jpg" class="lend-icon" onerror="this.src='https://img.gamewith.jp/article_tools/monst/gacha/1.jpg'" />
                <div class="lend-owner">${esc(c.accountName)}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- デバイスサマリー -->
        <section class="dashboard-section device-summary">
          <div class="section-header">
            <h3>デバイス稼働状況</h3>
          </div>
          <div class="device-usage-list">
            ${devices.length === 0 ? `
              <div class="empty-placeholder">
                <p>登録されたデバイスはありません</p>
              </div>
            ` : devices.map(d => {
              const occ = d.slots?.filter(s => s.accountId)?.length || 0;
              const tot = d.slots?.length || 0;
              const per = tot > 0 ? (occ / tot) * 100 : 0;
              return `
                <div class="device-usage-item">
                  <div class="usage-info">
                    <span class="usage-name">${esc(d.name)}</span>
                    <span class="usage-count">${occ}/${tot}</span>
                  </div>
                  <div class="usage-bar-bg">
                    <div class="usage-bar-fill" style="width: ${per}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderDevicesView() {
  return `
    <div class="devices-view">
      <div class="view-header">
        <div class="header-info">
          <h2>デバイス構成管理</h2>
          <p>端末ごとに枠を作成し、アカウントを割り当てます。</p>
        </div>
        <button class="btn-primary" id="add-device-btn">${ICONS.plus} デバイスを追加</button>
      </div>
      <div class="devices-grid">
        ${devices.length === 0 ? `
          <div class="empty-state mini">
            <div class="empty-icon">${ICONS.devices}</div>
            <p>デバイスが登録されていません</p>
          </div>
        ` : devices.map((d, i) => renderDeviceCard(d, i)).join('')}
      </div>
    </div>
  `;
}

function renderDeviceCard(device, index) {
  const type = device.type || 'smartphone';
  const icon = ICONS[type] || ICONS.devices;

  return `
    <div class="device-rack">
      <div class="rack-header">
        <div class="rack-title">
          ${icon}
          <span class="device-name">${esc(device.name)}</span>
        </div>
        <div class="rack-actions">
          <button class="btn-icon-small edit-device" data-index="${index}" title="デバイスを編集">${ICONS.edit}</button>
          <button class="btn-icon-small delete-device" data-index="${index}" title="デバイスを削除">${ICONS.trash}</button>
        </div>
      </div>
      <div class="slots-container">
        ${(device.slots || []).map((s, si) => renderSlot(s, si, index)).join('')}
        <button class="add-slot-btn" data-index="${index}">
          ${ICONS.plus}
          <span>アプリ枠を追加</span>
        </button>
      </div>
    </div>
  `;
}

function renderSlot(slot, si, di) {
  const account = accounts.find(a => a.id === slot.accountId);
  const slotName = slot.name || `アプリ${si + 1}`;

  return `
    <div class="slot-frame" data-di="${di}" data-si="${si}">
      <div class="frame-header">
        <div class="frame-title" title="${esc(slotName)}">
          ${esc(slotName)}
        </div>
        <div class="frame-actions">
          <button class="btn-frame-action edit-slot-name" data-di="${di}" data-si="${si}" title="アプリ名を変更">${ICONS.edit}</button>
          <button class="btn-frame-action delete-slot" data-di="${di}" data-si="${si}" title="枠を削除">${ICONS.trash}</button>
        </div>
      </div>
      <div class="slot-item ${account ? 'occupied' : 'empty'}" data-di="${di}" data-si="${si}">
        ${account ? `
          <div class="slot-acc-info">
            <img src="https://img.gamewith.jp/article_tools/monst/gacha/${account.characters?.[0]?.id || 1}.jpg" class="slot-avatar" onerror="this.src='https://img.gamewith.jp/article_tools/monst/gacha/1.jpg'" />
            <div class="slot-acc-detail">
              <span class="acc-name">${esc(account.name)}</span>
              <span class="acc-id">ID: ${formatId(account.monstId)}</span>
            </div>
            <button class="eject-btn" data-di="${di}" data-si="${si}" title="アカウントを解除">&times;</button>
          </div>
        ` : `
          <div class="slot-empty-msg">
            ${ICONS.plus} <span>アカウントを差し込む</span>
          </div>
        `}
      </div>
    </div>
  `;
}

function renderAccountSelector(di, si) {
  // すでに他のスロットにアサインされているアカウントIDを収集
  const assignedIds = devices.flatMap(d => d.slots.map(s => s.accountId)).filter(id => id);
  const available = accounts.filter(a => !assignedIds.includes(a.id));

  return `
    <div class="selector-overlay" id="selector-modal">
      <div class="selector-card">
        <div class="selector-header">
          <h3>アカウントを差し込む</h3>
          <button class="close-selector">&times;</button>
        </div>
        <div class="selector-search">
          ${ICONS.search}
          <input type="text" id="sel-search" placeholder="名前で検索..." />
        </div>
        <div class="selector-list">
          ${available.length === 0 ? '<p class="empty-msg">利用可能なアカウントがありません</p>' : available.map(a => `
            <div class="sel-item" data-acc-id="${a.id}" data-di="${di}" data-si="${si}">
              <img src="https://img.gamewith.jp/article_tools/monst/gacha/${a.characters?.[0]?.id || 1}.jpg" class="sel-icon" onerror="this.src='https://img.gamewith.jp/article_tools/monst/gacha/1.jpg'" />
              <div class="sel-info">
                <span class="sel-name">${esc(a.name)}</span>
                <span class="sel-id">ID: ${formatId(a.monstId)}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function saveDevices() {
  localStorage.setItem('monst_devices', JSON.stringify(devices));
  renderApp();
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
        <div class="account-name">
          ${esc(account.name)}
          ${account.canLend ? `<span class="badge-lendable">貸しモン可</span>` : ''}
        </div>
        <div class="card-actions">
          <button class="btn-action edit-account" data-index="${index}" title="編集">${ICONS.edit}</button>
          <button class="btn-action delete-account" data-index="${index}" title="削除">${ICONS.trash}</button>
        </div>
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
            <div class="char-icon-wrapper ${c.favorite ? 'favorite' : ''}" data-acc="${index}" data-ci="${ci}" title="${esc(c.name)}${c.favorite ? ' (重要キャラ)' : ''}">
              <img src="https://img.gamewith.jp/article_tools/monst/gacha/${c.id}.jpg" class="char-icon" onerror="this.src='https://img.gamewith.jp/article_tools/monst/gacha/1.jpg'" />
              ${c.favorite ? `<div class="favorite-star">${ICONS.star}</div>` : ''}
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

  // ナビゲーション切り替え
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      currentNav = item.dataset.nav;
      renderApp();
    });
  });

  // テーマ切り替え
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('monst_theme', currentTheme);
    applyTheme();
    renderApp();
  });

  // FAB → モーダル表示
  document.getElementById('fab-add')?.addEventListener('click', () => {
    editingIndex = null;
    // フォームをリセット
    const nameInput = document.getElementById('f-name');
    const monstIdInput = document.getElementById('f-monst-id');
    const mixiIdInput = document.getElementById('f-mixi-id');
    const canLendInput = document.getElementById('f-can-lend');
    if (nameInput) nameInput.value = '';
    if (monstIdInput) monstIdInput.value = '';
    if (mixiIdInput) mixiIdInput.value = '';
    if (canLendInput) canLendInput.checked = false;

    const title = document.getElementById('modal-title');
    const saveBtn = document.getElementById('save-btn');
    if (title) title.textContent = 'アカウント登録';
    if (saveBtn) saveBtn.textContent = '登録する';

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

    const monstId = document.getElementById('f-monst-id')?.value.trim() || '';
    const mixiId = document.getElementById('f-mixi-id')?.value.trim() || '';
    const canLend = document.getElementById('f-can-lend')?.checked || false;

    if (editingIndex !== null) {
      accounts[editingIndex] = {
        ...accounts[editingIndex],
        name,
        monstId,
        mixiId,
        canLend
      };
      showToast('アカウント情報を更新しました');
    } else {
      accounts.push({
        id: generateId(),
        name,
        monstId,
        mixiId,
        canLend,
        device: '',
        characters: []
      });
      showToast('アカウントを追加しました');
    }
    save();
    closeModal();
  });

  // カードメニュー削除に伴い不要なイベントを削除

  // メニュー外クリックで閉じる処理は init で一括管理に変更

  // 編集
  document.querySelectorAll('.edit-account').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.index);
      const acc = accounts[idx];
      editingIndex = idx;
      
      // 値をセット
      document.getElementById('f-name').value = acc.name;
      document.getElementById('f-monst-id').value = acc.monstId || '';
      document.getElementById('f-mixi-id').value = acc.mixiId || '';
      const canLendInput = document.getElementById('f-can-lend');
      if (canLendInput) canLendInput.checked = !!acc.canLend;
      
      // モーダル表示
      const modal = document.getElementById('modal');
      const title = document.getElementById('modal-title');
      const saveBtn = document.getElementById('save-btn');
      if (title) title.textContent = 'アカウント編集';
      if (saveBtn) saveBtn.textContent = '更新する';
      modal?.classList.add('visible');
    });
  });

  // 削除
  document.querySelectorAll('.delete-account').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.index);
      if (confirm(`「${accounts[idx].name}」を削除しますか？`)) {
        accounts.splice(idx, 1);
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

  // 重要キャラトグル
  document.querySelectorAll('.char-icon-wrapper').forEach(w => {
    w.addEventListener('click', () => {
      const ai = w.dataset.acc;
      const ci = w.dataset.ci;
      if (ai !== undefined && ci !== undefined) {
        const ch = accounts[ai].characters[ci];
        ch.favorite = !ch.favorite;
        save();
        showToast(ch.favorite ? '重要キャラに設定しました' : '重要キャラを解除しました');
      }
    });
  });

  // エクスポート
  document.getElementById('export-btn')?.addEventListener('click', () => {
    const exportData = {
      accounts,
      devices,
      devicePresets,
      version: '2.0'
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `monst_manager_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showToast('すべてのデータをエクスポートしました');
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
        if (data.accounts && Array.isArray(data.accounts)) {
          // 新形式 (オブジェクト)
          accounts = data.accounts;
          if (data.devices) devices = data.devices;
          if (data.devicePresets) devicePresets = data.devicePresets;
          
          save(); // accountsの保存と再レンダリング
          saveDevices(); // localStorageへの保存と再レンダリング
          savePresets(); // localStorageへの保存
          showToast('すべてのデータをインポートしました');
        } else if (Array.isArray(data)) {
          // 旧形式 (配列)
          accounts = data;
          save();
          showToast('アカウント情報をインポートしました');
        } else {
          throw new Error('Invalid format');
        }
      } catch (err) { 
        console.error(err);
        alert('不正な形式のファイルです'); 
      }
    };
    reader.readAsText(file);
  });

  // 端末プリセット関連のイベント
  const presetContainer = document.getElementById('preset-container');
  if (presetContainer) {
    presetContainer.addEventListener('click', e => {
      const chip = e.target.closest('.device-chip');
      if (!chip) return;

      const removeBtn = e.target.closest('.remove-chip');
      if (removeBtn) {
        e.stopPropagation();
        const val = removeBtn.dataset.value;
        devicePresets = devicePresets.filter(p => p !== val);
        savePresets();
        renderPresets();
        return;
      }

      const val = chip.dataset.value;
      const input = document.getElementById('f-device');
      if (input) {
        input.value = val;
        showToast(`「${val}」を選択しました`);
      }
    });
  }

  document.getElementById('add-preset-btn')?.addEventListener('click', () => {
    const val = document.getElementById('f-device')?.value.trim();
    if (!val) return;
    if (devicePresets.includes(val)) {
      showToast('既に登録されています', '!');
      return;
    }
    devicePresets.push(val);
    savePresets();
    renderPresets();
    showToast('お気に入りに追加しました');
  });

  // --- デバイス管理関連イベント ---
  const deviceModal = document.getElementById('device-modal');
  const dNameInput = document.getElementById('d-name');

  const closeDeviceModal = () => {
    deviceModal?.classList.remove('visible');
    editingDeviceIndex = null;
  };

  document.getElementById('add-device-btn')?.addEventListener('click', () => {
    editingDeviceIndex = null;
    if (dNameInput) dNameInput.value = '';
    const radio = document.querySelector('input[name="d-type"][value="smartphone"]');
    if (radio) radio.checked = true;
    const title = document.getElementById('device-modal-title');
    const saveBtn = document.getElementById('device-save-btn');
    if (title) title.textContent = 'デバイス登録';
    if (saveBtn) saveBtn.textContent = '登録する';
    deviceModal?.classList.add('visible');
  });

  document.getElementById('device-modal-close')?.addEventListener('click', closeDeviceModal);
  deviceModal?.addEventListener('click', e => {
    if (e.target === deviceModal) closeDeviceModal();
  });

  document.getElementById('device-save-btn')?.addEventListener('click', () => {
    const name = dNameInput?.value.trim();
    if (!name) return;

    const type = document.querySelector('input[name="d-type"]:checked')?.value || 'smartphone';

    if (editingDeviceIndex !== null) {
      devices[editingDeviceIndex].name = name;
      devices[editingDeviceIndex].type = type;
      showToast('デバイス情報を更新しました');
    } else {
      devices.push({ id: generateId(), name, type, slots: [] });
      showToast('デバイスを追加しました');
    }
    saveDevices();
    closeDeviceModal();
  });

  document.querySelectorAll('.edit-device').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.index);
      const dev = devices[idx];
      editingDeviceIndex = idx;

      if (dNameInput) dNameInput.value = dev.name;
      const typeRadio = document.querySelector(`input[name="d-type"][value="${dev.type || 'smartphone'}"]`);
      if (typeRadio) typeRadio.checked = true;

      const title = document.getElementById('device-modal-title');
      const saveBtn = document.getElementById('device-save-btn');
      if (title) title.textContent = 'デバイス編集';
      if (saveBtn) saveBtn.textContent = '更新する';
      deviceModal?.classList.add('visible');
    });
  });

  document.querySelectorAll('.delete-device').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const idx = btn.dataset.index;
      if (confirm(`デバイス「${devices[idx].name}」を削除しますか？\n(スロット情報も削除されます)`)) {
        devices.splice(idx, 1);
        saveDevices();
        showToast('デバイスを削除しました');
      }
    });
  });

  // アプリ枠（スロット）の追加
  document.querySelectorAll('.add-slot-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const di = btn.dataset.index;
      if (!devices[di].slots) devices[di].slots = [];
      
      const num = devices[di].slots.length + 1;
      const defaultName = `アプリ${num}`;
      const name = prompt('アプリ名（枠の名前）を入力してください:', defaultName);
      
      if (name !== null) {
        devices[di].slots.push({ 
          id: generateId(), 
          name: name.trim() || defaultName, 
          accountId: null 
        });
        saveDevices();
        showToast('アプリ枠を追加しました');
      }
    });
  });

  // アカウントの差し込み
  document.querySelectorAll('.slot-item.empty').forEach(item => {
    item.addEventListener('click', () => {
      const di = item.dataset.di;
      const si = item.dataset.si;
      const overlay = document.createElement('div');
      overlay.id = 'temp-selector-container';
      overlay.innerHTML = renderAccountSelector(di, si);
      document.body.appendChild(overlay);

      const container = document.getElementById('temp-selector-container');
      container?.querySelector('.close-selector')?.addEventListener('click', () => container.remove());
      
      container?.querySelectorAll('.sel-item').forEach(sel => {
        sel.addEventListener('click', () => {
          const accId = sel.dataset.accId;
          const dIdx = sel.dataset.di;
          const sIdx = sel.dataset.si;
          
          devices[dIdx].slots[sIdx].accountId = accId;
          
          // アカウント側の端末情報も更新
          const accIdx = accounts.findIndex(a => a.id === accId);
          if (accIdx !== -1) {
            accounts[accIdx].device = devices[dIdx].name;
            localStorage.setItem('monst_accounts', JSON.stringify(accounts));
          }

          saveDevices();
          container.remove();
          showToast('アカウントを差し込みました');
        });
      });

      const searchInput = container?.querySelector('#sel-search');
      searchInput?.addEventListener('input', e => {
        const q = e.target.value.toLowerCase();
        container.querySelectorAll('.sel-item').forEach(it => {
          const name = it.querySelector('.sel-name').textContent.toLowerCase();
          it.style.display = name.includes(q) ? 'flex' : 'none';
        });
      });
      searchInput?.focus();
    });
  });

  // スロット名（アプリ名）の編集
  document.querySelectorAll('.edit-slot-name').forEach(label => {
    label.addEventListener('click', e => {
      e.stopPropagation();
      const di = label.dataset.di;
      const si = label.dataset.si;
      const current = devices[di].slots[si].name || `アプリ${parseInt(si)+1}`;
      const newName = prompt('アプリ名を入力してください:', current);
      if (newName !== null && newName.trim() !== '') {
        devices[di].slots[si].name = newName.trim();
        saveDevices();
        showToast('アプリ名を更新しました');
      }
    });
  });

  // 枠の削除
  document.querySelectorAll('.delete-slot').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const di = btn.dataset.di;
      const si = btn.dataset.si;
      if (confirm('この枠を削除しますか？\n(差し込まれているアカウントは解除されます)')) {
        const accId = devices[di].slots[si].accountId;
        if (accId) {
          const accIdx = accounts.findIndex(a => a.id === accId);
          if (accIdx !== -1) {
            accounts[accIdx].device = '';
            localStorage.setItem('monst_accounts', JSON.stringify(accounts));
          }
        }
        devices[di].slots.splice(si, 1);
        saveDevices();
        showToast('枠を削除しました');
      }
    });
  });

  // 抜き出し（解除）
  document.querySelectorAll('.eject-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const di = btn.dataset.di;
      const si = btn.dataset.si;
      const accId = devices[di].slots[si].accountId;

      const accIdx = accounts.findIndex(a => a.id === accId);
      if (accIdx !== -1) {
        accounts[accIdx].device = '';
        localStorage.setItem('monst_accounts', JSON.stringify(accounts));
      }

      devices[di].slots[si].accountId = null;
      saveDevices();
      showToast('アカウントを解除しました');
    });
  });
}

function renderPresets() {
  const container = document.getElementById('preset-container');
  if (!container) return;
  container.innerHTML = devicePresets.map(p => `
    <span class="device-chip" data-value="${esc(p)}">
      ${esc(p)}
      <span class="remove-chip" data-value="${esc(p)}">&times;</span>
    </span>
  `).join('');
}

function savePresets() {
  localStorage.setItem('monst_device_presets', JSON.stringify(devicePresets));
}

function closeModal() {
  document.getElementById('modal')?.classList.remove('visible');
  editingIndex = null;
  // テキストリセット
  const title = document.getElementById('modal-title');
  const saveBtn = document.getElementById('save-btn');
  if (title) title.textContent = 'アカウント登録';
  if (saveBtn) saveBtn.textContent = '登録する';

  ['f-name', 'f-monst-id', 'f-mixi-id'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function save() {
  localStorage.setItem('monst_accounts', JSON.stringify(accounts));
  renderApp();
}

function applyTheme() {
  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
}

// --- 起動 ---
init();
