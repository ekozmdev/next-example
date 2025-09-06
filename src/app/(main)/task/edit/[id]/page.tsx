// 動的ルーティングは[]で囲んだフォルダ名にする
// []の中の名前でpropsとして受け取れる
const TaskEditIdPage = ({ params }: { params: {id: string} }) => {
  return (
    <div>task id: { params.id }</div>
  );
}

export default TaskEditIdPage;