const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-green-300 p-4">
      <div>管理者レイアウト</div>
      {/* childrenも色付けしたdivに入っているので、色がつく */}
      {children}
    </div>
  );
}

// レイアウト用のコンポーネントdefault exportする
export default AdminLayout;