# Monst Account Manager (モンスト・アカウントマネージャー)

モンスターストライクのアカウントと、複数の端末・アプリ枠（スロット）を効率的に管理するためのプレミアム・ウェブアプリケーションです。

![Monst Account Manager](https://img.shields.io/badge/Status-Beta-blueviolet?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🌟 特徴

- **モダン・プレミアム・デザイン**: 美しいダークモード（ライトモード切替可）と直感的なダッシュボードUI。
- **アカウント管理**: アカウント名、モンストID、MIXI ID、使用端末を一元管理。
- **キャラクター・コレクション**: 膨大なキャラクターデータベースから所持キャラを検索・登録。重要キャラ（お気に入り）設定も可能。
- **デバイス構成管理 (Rack & Slot)**: 物理的な端末ごとにアプリ枠（スロット）を作成し、どのアカウントがどの枠に入っているかを視覚的に管理。
- **インポート・エクスポート**: 全データをJSON形式でバックアップ・復元可能。
- **オフライン・ファースト**: 全データはブラウザの LocalStorage に保存されるため、サーバー設定なしですぐに使用可能。

## 🛠 テクノロジースタック

- **Core**: HTML5, Vanilla JavaScript (ES Modules)
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Custom Properties, Flexbox, Grid)
- **Iconography**: SVG (Lucide-inspired)

## 📁 プロジェクト構造

メンテナンス性を考慮し、機能ごとにモジュール化されています。

```text
src/
├── main.js           # エントリーポイント・イベントバインド
├── constants/        # アイコン定義などの定数
├── utils/            # 共通ヘルパー関数
├── services/         # ストレージ操作、バックアップ処理
└── components/       # UIコンポーネント（ヘッダー、サイドバー、各ビュー）
```

## 🚀 セットアップ

### 開発環境の起動

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### ビルド

```bash
npm run build
```

## 📝 使い方

1. **アカウント登録**: 右下の `+` ボタンからアカウント情報を登録します。
2. **キャラ登録**: アカウントカード内の検索窓から所持キャラクターを追加します。
3. **デバイス管理**: サイドバーから「デバイス管理」へ移動し、端末（スマホ・タブレット等）を追加。
4. **枠の作成**: デバイス内に「アプリ枠」を追加し、登録したアカウントを「差し込む」ことで、どの端末でどのアカウントを動かしているかを整理できます。

## 📄 ライセンス

MIT License

---

Designed with ❤️ for Monst Strikers.
