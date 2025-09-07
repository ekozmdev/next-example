"use server"; // server actionを使う場合はこれを書く

// formタグのactionにあるので、FormDataは自動で渡される
// 他の値を含めたい場合はbindすると渡せる
export const createTask = async (taskId: number, formData: FormData) => {
  // DBに保存する処理など
  console.log("タスクを作成しました");
  console.log(formData);
  console.log(formData.get("name")); // inputのname属性の値で取得できる
  console.log(taskId);
}

export default createTask