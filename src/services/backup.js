// --- バックアップサービス ---

export const backupService = {
  /**
   * データをJSONファイルとしてエクスポートします
   */
  exportData(data) {
    const exportData = {
      ...data,
      version: '2.0',
      exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `monst_manager_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    
    // クリーンアップ
    setTimeout(() => URL.revokeObjectURL(url), 100);
  },

  /**
   * JSONファイルを読み込み、データをパースします
   */
  importData(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          resolve(data);
        } catch (err) {
          reject(new Error('不正な形式のファイルです'));
        }
      };
      
      reader.onerror = () => reject(new Error('ファイルの読み込みに失敗しました'));
      reader.readAsText(file);
    });
  }
};
