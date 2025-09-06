# next-example

Next.jsフルスタックWebアプリケーション開発入門

https://www.udemy.com/course/nextjs-fullstack/

の作業用のリポジトリ

## サーバーコンポーネントとクライアントコンポーネント

- クライアント: ブラウザ
- サーバー: nextがデプロイされているサーバー

### クライアントコンポーネント (CC)

- 従来のReactコンポーネント
- ブラウザ側で処理されてレンダリングされる
- Next.jsではファイルの先頭に`"use client"`をつけるとクライアントコンポーネントになる

### サーバーコンポーネント

- サーバー側でレンダリングされる
- Next.jsではこっちがデフォルト
- メリット
  - 処理がサーバー側なのでパフォーマンスが良くなる
  - ブラウザに渡すJSのバンドルサイズが小さくなる
  - APIkey などの機密情報がクライアントサイドに渡らない
  - リクエストが来た時にHTMLが返るのでSEOにも効果的
    - ヘッドレスブラウザで見ればいいと思うけどな
- デメリット
  - 使えない機能がある
    - useStateとかuseEffectなどのreact hooks
    - onClickとかonChange
    - ブラウザAPI
  - 初期ページ以外はCCの方が早い場合がある
    - CCはブラウザのJSで動くから

## 使い分け

- 基本はサーバーコンポーネントで書く
- CCでしか使えない機能が必要ならCC
  - ページ全体をCCかSCに決める必要はないのでボタンとか検索ボックスだけCCにするとよいらしい

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
