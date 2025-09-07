import { NextResponse } from "next/server";

export interface Task {
  id: number;
  name: string;
}

const tasks: Task[] = [
  { id: 1, name: 'プログラミングを頑張る' },
  { id: 2, name: 'ランニングを頑張る' },
];

// route.tsの中に、HTTPメソッドの名前で非同期関数を定義するとルートハンドラになる
// export const POST = async () => {}
// export const PUT = async () => {}
export const GET = async (request: Request) => {
  // レスポンスはNextResponseで返す
  // JSONで返す場合はNextResponse.json()にオブジェクトとして入れる。{}で囲む方が良い
  // フロントエンドでresponse.tasksで取り出せるようになる
  return NextResponse.json({ tasks }, { status: 200 });
}

// ルートハンドラは静的にビルドされるので、動的にしたい場合はexport const dynamic = "force-dynamic"を追加する
// ルートセグメントコンフィグという
// これをつけると、リクエストのたびに実行されるようになる
export const dynamic = "force-dynamic";
