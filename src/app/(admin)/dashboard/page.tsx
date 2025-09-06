const AdminDashboardPage = () => {
  // 強制的にエラーを発生させると、そのtsxに一番近いerror.tsxが表示される
  // ２番目以降は表示されないようだ
  throw new Error('意図的にエラーを発生させています');

  return (
    <div>AdminDashboardPage</div>
  );
}

export default AdminDashboardPage;