import { createTask } from "@/app/actions/sampleActions";

const ServerActionsPage = () => {
  const taskId = 1;
  // 関数のbindは関数の先頭の引数を固定した新しい関数を作る
  // nullはthisの値なので、今回は関係ないのでnullにしている <- よくわからんな   
  const createTaskWithTaskId = createTask.bind(null, taskId); // taskIdをbindしておく
  return (
    <div>
        <form action={createTaskWithTaskId}>
          <input type="text" id="name" name="name" className="bg-gray-200"/>
          <button type="submit" className="bg-gray-400 ml-2 px-2">送信</button>
        </form>
    </div>
  );
};

export default ServerActionsPage;