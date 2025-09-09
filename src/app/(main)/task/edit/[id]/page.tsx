// 動的ルーティングは[]で囲んだフォルダ名にする
// []の中の名前でpropsとして受け取れる
const TaskEditIdPage = async (props: { params: Promise<{id: string}> }) => {
  // Next15からparamsが非同期化するので、awaitする必要がある。
  const params = await props.params;
  return (
    <div>task id: { params.id }</div>
  );
}

export default TaskEditIdPage;