// --- ストレージサービス ---

const KEYS = {
  ACCOUNTS: 'monst_accounts',
  PRESETS: 'monst_device_presets',
  THEME: 'monst_theme',
  DEVICES: 'monst_devices'
};

export const storageService = {
  /**
   * アカウント情報の保存
   */
  saveAccounts(accounts) {
    localStorage.setItem(KEYS.ACCOUNTS, JSON.stringify(accounts));
  },

  /**
   * アカウント情報の読み込み
   */
  loadAccounts() {
    return JSON.parse(localStorage.getItem(KEYS.ACCOUNTS)) || [];
  },

  /**
   * デバイス構成の保存
   */
  saveDevices(devices) {
    localStorage.setItem(KEYS.DEVICES, JSON.stringify(devices));
  },

  /**
   * デバイス構成の読み込み
   */
  loadDevices() {
    return JSON.parse(localStorage.getItem(KEYS.DEVICES)) || [];
  },

  /**
   * デバイスプリセットの保存
   */
  savePresets(presets) {
    localStorage.setItem(KEYS.PRESETS, JSON.stringify(presets));
  },

  /**
   * デバイスプリセットの読み込み
   */
  loadPresets() {
    return JSON.parse(localStorage.getItem(KEYS.PRESETS)) || ['iPhone', 'iPad', 'Android'];
  },

  /**
   * テーマの保存
   */
  saveTheme(theme) {
    localStorage.setItem(KEYS.THEME, theme);
  },

  /**
   * テーマの読み込み
   */
  loadTheme() {
    return localStorage.getItem(KEYS.THEME) || 'dark';
  }
};
