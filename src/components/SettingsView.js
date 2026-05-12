import { esc } from '../utils/helpers.js';

export function renderSettingsView(devicePresets) {
  return `
    <div class="settings-view">
      <section class="settings-section">
        <h3>端末プリセット</h3>
        <p class="settings-desc">アカウント登録時によく使う端末名を登録しておけます。</p>
        
        <div class="preset-manager">
          <div class="preset-input-group">
            <input type="text" id="f-device" placeholder="端末名を入力..." />
            <button class="btn-primary" id="add-preset-btn">追加</button>
          </div>
          <div class="preset-list" id="preset-container">
            ${renderPresets(devicePresets)}
          </div>
        </div>
      </section>
    </div>
  `;
}

export function renderPresets(devicePresets) {
  return devicePresets.map(p => `
    <span class="device-chip" data-value="${esc(p)}">
      ${esc(p)}
      <span class="remove-chip" data-value="${esc(p)}">&times;</span>
    </span>
  `).join('');
}
