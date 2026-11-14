import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// GameWith モンスター評価図鑑のマスターデータ URL
const MASTER_CHARACTERS_URL =
  'https://firebasestorage.googleapis.com/v0/b/walkthrough-tool.appspot.com/o/monst%2Fmaster%2Fcharacters.json?alt=media';

// アイコン画像のベース URL
const ICON_BASE_URL = 'https://img.gamewith.jp/article_tools/monst/gacha';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.resolve(__dirname, '../public/data/characters.json');

/**
 * マスターデータ配列をアプリ用のキャラデータ形式に変換・重複排除します
 * @param {Array<Record<string, unknown>>} rawList - 取得したマスターデータ配列
 * @returns {Array<{id: string|number, name: string, icon: string}>} 整形済みキャラ配列
 */
function transformCharacters(rawList) {
  const seenIds = new Set();
  const result = [];

  for (const item of rawList) {
    const rawIcon = item['アイコン'];
    const rawName = item['モンスター名'];

    // アイコンまたは名前が未設定のエントリー（未実装画像など）は除外
    if (rawIcon === '' || rawIcon === null || rawIcon === undefined) continue;
    if (typeof rawName !== 'string' || rawName.trim() === '') continue;

    const idKey = String(rawIcon);
    if (seenIds.has(idKey)) continue;
    seenIds.add(idKey);

    result.push({
      id: rawIcon,
      name: rawName.trim(),
      icon: `${ICON_BASE_URL}/${idKey}.jpg`,
    });
  }

  return result;
}

/**
 * 既存の characters.json を読み込みます（存在しない場合は空配列を返します）
 */
async function loadExistingCharacters(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

/**
 * メイン処理: 最新キャラ一覧を取得し、必要に応じてファイルを更新します
 */
async function main() {
  const isDryRun = process.argv.includes('--dry-run');

  console.log('最新のキャラクターマスターデータを取得しています...');
  const response = await fetch(MASTER_CHARACTERS_URL);
  if (!response.ok) {
    throw new Error(`データ取得に失敗しました (HTTP ${response.status} ${response.statusText})`);
  }

  const rawData = await response.json();
  if (!Array.isArray(rawData) || rawData.length === 0) {
    throw new Error('取得したマスターデータの形式が不正または空です');
  }

  const nextCharacters = transformCharacters(rawData);
  const existingCharacters = await loadExistingCharacters(OUTPUT_PATH);

  const existingIds = new Set(existingCharacters.map((c) => String(c.id)));
  const nextIds = new Set(nextCharacters.map((c) => String(c.id)));

  const added = nextCharacters.filter((c) => !existingIds.has(String(c.id)));
  const removed = existingCharacters.filter((c) => !nextIds.has(String(c.id)));

  console.log(`既存件数: ${existingCharacters.length} 件`);
  console.log(`更新後件数: ${nextCharacters.length} 件`);
  console.log(`追加: ${added.length} 件 / 削除: ${removed.length} 件`);

  if (added.length > 0) {
    console.log('追加キャラ例（先頭5件）:');
    for (const c of added.slice(0, 5)) {
      console.log(`  - [${c.id}] ${c.name}`);
    }
  }

  if (isDryRun) {
    console.log('--dry-run モードのため、ファイルは書き換えませんでした。');
    return;
  }

  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(nextCharacters, null, 2)}\n`, 'utf8');
  console.log(`更新が完了しました: ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error('エラー:', err.message);
  process.exitCode = 1;
});
