"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createTask } from "@/app/actions/sampleActions";

const ServerActionsPage = () => {
  const taskId = 1;
  // 関数のbindは関数の先頭の引数を固定した新しい関数を作る
  // nullはthisの値なので、今回は関係ないのでnullにしている <- よくわからんな   
  const createTaskWithTaskId = createTask.bind(null, taskId); // taskIdをbindしておく

  // フォームの状態を管理する
  const initialState = { error : "" };
  // state: サーバーアクションの戻り値, formAction: Server Actionsと同じ動きをする関数
  // これでこのコンポーネントでServer Actionsの戻り値が使える
  const [state, formAction] = useActionState(createTaskWithTaskId, initialState);

  const SubmitButton = () => {
    // pendingはServer Actionsの送信中はtrueになる
    const { pending } = useFormStatus(); // フォームの送信状態を取得
    return (
      <button type="submit" className="bg-gray-400 ml-2 px-2 disabled:bg-gray-300" disabled={pending}>
        送信
      </button>
    )
  }
  return (
    <div>
        <form action={formAction}>
          <input type="text" id="name" name="name" className="bg-gray-200"/>
          <SubmitButton/>
          <div>{ state.error }</div>
        </form>
    </div>
  );
};

export default ServerActionsPage;