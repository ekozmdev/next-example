"use client";

// error.tsxはClient Componentである必要がある
// use clientをつけないと以下のようなエラーになる
// ~/workspace/next-example/src/app/error.tsx must be a Client Component. Add the "use client" directive the top of the file to resolve this issue.

const ErrorPage = () => {
  return <div>ErrorPage 500 - Server Error</div>;
};

export default ErrorPage;