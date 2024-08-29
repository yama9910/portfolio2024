# portfolio2024

## コマンド一覧

#### 環境構築

**クローン**
```bash
git clone https://github.com/yama9910/portfolio2024
```

**依存関係をインストール**  
```bash
pnpm i
```

#### 開発サーバー起動
```bash
pnpm dev
```

#### ビルド
```bash
pnpm build
```

#### 検証サーバ起動
```bash
pnpm start
```

## コマンドのユースケース
### 初期クローン時 && 依存関係の更新時
```bash
pnpm i    # 依存関係をインストール（しなおす）
pnpm dev  # 開発サーバを試しに立ち上げる
```

### 検証サーバ（ビルド後画面）でページプレビュー
```bash
pnpm i      # 依存関係をインストール（しなおす）
pnpm build  # ビルド
pnpm start  # wranglerでビルドをローカルサーバにデプロイ
```

## 公式README

<details>
<summary>Remix + Cloudflare へようこそ！</summary>

# Remix + Cloudflare へようこそ！

- 📖 [Remix ドキュメント](https://remix.run/docs)
- 📖 [Remix Cloudflare ドキュメント](https://remix.run/guides/vite#cloudflare)

## 開発

開発サーバーを起動するには、以下を実行します：

```sh
npm run dev
```

Wrangler を実行するには、以下を実行します：

```sh
npm run build
npm run start
```

## 型定義生成

`wrangler.toml` にある Cloudflare バインディングの型を生成するには、以下を実行します：

```sh
npm run typegen
```

`wrangler.toml` に変更を加えた際は、再度 typegen を実行する必要があります。

## デプロイ

まず、アプリを本番環境用にビルドします：

```sh
npm run build
```

次に、アプリを Cloudflare Pages にデプロイします：

```sh
npm run deploy
```

## スタイリング

このテンプレートには、簡単なデフォルト設定が施された [Tailwind CSS](https://tailwindcss.com/) がすでに含まれています。お好みの CSS フレームワークを使用できます。詳細は [Vite の CSS に関するドキュメント](https://vitejs.dev/guide/features.html#css) を参照してください。

</details>