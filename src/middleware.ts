import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log("ミドルウェア");

  return NextResponse.next();
}

// 特定のパスのみがミドルウェアの対象になるようにする設定
export const config = {
  matcher: ["/", "/task"]
}