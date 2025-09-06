const TaskLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-blue-300 p-4">
      <div>タスクレイアウト</div>
      {/* childrenも色付けしたdivに入っているので、色がつく */}
      {children}
    </div>
  );
}

// レイアウト用のコンポーネントdefault exportする
export default TaskLayout;