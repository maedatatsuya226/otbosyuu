# 九州カマチグループ OT募集 静的サイト

React + Vite + Tailwind CSSで作成したCloudflare Pages向け静的サイトです。

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

Cloudflare Pagesでは以下を設定してください。

- Build command: `npm run build`
- Build output directory: `dist`

## 画像差し替え

仮画像は `public/images/` に置いています。`src/siteData.ts` の `image` パスを変更すると各セクションの画像を差し替えられます。
