import { ICONS } from '../constants/icons.js';

export function renderSidebar(currentNav, user) {
  return `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-icon">M</div>
        <div class="brand-text">
          <h2>MONST</h2>
          <span>Account Manager</span>
        </div>
      </div>
      <nav class="sidebar-nav">
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
        <div class="nav-item ${currentNav === 'settings' ? 'active' : ''}" data-nav="settings">
          ${ICONS.settings}
          <span>設定</span>
        </div>
      </nav>

      <div class="sidebar-user">
        ${user ? `
          <div class="user-info">
            <img src="${user.photoURL}" alt="${user.displayName}" class="user-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${user.displayName}'">
            <div class="user-details">
              <span class="user-name">${user.displayName}</span>
              <span class="user-status">同期中</span>
            </div>
            <button id="logout-btn" class="icon-btn" title="ログアウト">${ICONS.logOut}</button>
          </div>
        ` : `
          <div class="login-prompt">
            <p>クラウド同期でバックアップ</p>
            <button id="login-btn" class="btn btn-primary btn-sm login-btn">
              ${ICONS.logIn}
              <span>Googleでログイン</span>
            </button>
          </div>
        `}
      </div>
    </aside>
  `;
}
