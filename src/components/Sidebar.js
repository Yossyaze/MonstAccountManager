import { ICONS } from '../constants/icons.js';

export function renderSidebar(currentNav) {
  return `
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
  `;
}
