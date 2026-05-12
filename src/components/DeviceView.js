import { ICONS } from '../constants/icons.js';
import { esc, formatId } from '../utils/helpers.js';

export function renderDevicesView(devices, accounts) {
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
        ` : devices.map((d, i) => renderDeviceCard(d, i, accounts)).join('')}
      </div>
    </div>
  `;
}

function renderDeviceCard(device, index, accounts) {
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
        ${(device.slots || []).map((s, si) => renderSlot(s, si, index, accounts)).join('')}
        <button class="add-slot-btn" data-index="${index}">
          ${ICONS.plus}
          <span>アプリ枠を追加</span>
        </button>
      </div>
    </div>
  `;
}

function renderSlot(slot, si, di, accounts) {
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

export function renderAccountSelector(di, si, devices, accounts) {
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
