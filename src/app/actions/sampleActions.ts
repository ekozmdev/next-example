"use server"; // server actionを使う場合はこれを書く

interface FormState {
  error: string;
}

// formタグのactionにあるので、FormDataは自動で渡される
// 他の値を含めたい場合はbindすると渡せる
export const createTask = async (taskId: number, state: FormState, formData: FormData) => {
  // DBに保存する処理など
  console.log("タスクを作成しました");
  console.log(formData);
  console.log(formData.get("name")); // inputのname属性の値で取得できる
  console.log(taskId);
  await new Promise((resolve) => setTimeout(resolve, 3000))
  state.error = "エラーが発生しました";
  return state; // 戻り値はuseFormStateのstateに入る
}

export default createTask