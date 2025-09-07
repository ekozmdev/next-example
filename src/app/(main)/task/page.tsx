import { Task } from "@/app/api/tasks/route";

const getTasks = async () => {
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "GET",
    cache: "no-store" // キャッシュを無効化して、常に最新のデータを取得する
  });
  return await response.json();
}

// asyncのコンポーネントはサーバーコンポーネントでしか使えん
const TaskPage = async () => {
  const tasks = (await getTasks()).tasks as Task[];
  return (
    <div>
      <div>TaskPage</div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    </div>
  );
}

export default TaskPage;