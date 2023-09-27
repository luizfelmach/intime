import { loadWatch } from "@/factory/load-watch-factory";
import { Watch } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const watchs: Watch[] = await loadWatch.execute();
    return NextResponse.json(watchs);
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}
