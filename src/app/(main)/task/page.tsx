import { Task } from "@/app/api/tasks/route";

const getTasks = async () => {
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "GET",
    // Next.js 15 からキャッシュしないことがデフォルト ->  (cache skip) Cache skipped reason: (auto no cache)
    // cache: "no-store" // キャッシュを無効化して、常に最新のデータを取得する
    // cacheを強制する場合
    cache: "force-cache"
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