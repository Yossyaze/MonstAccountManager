import { ICONS } from '../constants/icons.js';

export function renderAccountModal() {
  return `
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
              <span>貸しモン可としてマーク</span>
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-primary full" id="save-btn">登録する</button>
        </div>
      </div>
    </div>
  `;
}

export function renderDeviceModal() {
  return `
    <div class="modal-overlay" id="device-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="device-modal-title">デバイス登録</h2>
          <button class="close-modal" id="device-modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>デバイス名</label>
            <input type="text" id="d-name" placeholder="メイン端末、サブiPad など" />
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
                  <span>PC</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-primary full" id="device-save-btn">登録する</button>
        </div>
      </div>
    </div>
  `;
}
