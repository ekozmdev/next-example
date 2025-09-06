const Page = () => {
  // 強制的にエラーを発生させると、そのtsxに一番近いerror.tsxが表示される
  throw new Error('意図的にエラーを発生させています');
  return (
    <div>Hello Next.js!</div>
  );
}

export default Page;