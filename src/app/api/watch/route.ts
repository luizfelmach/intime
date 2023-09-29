import { loadWatch } from "@/factory/load-watch-factory";
import { Watch } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const p = request.nextUrl.searchParams.get("p");
    const category = request.nextUrl.searchParams.get("category");
    const brand = request.nextUrl.searchParams.get("brand");
    const params = {
      p,
      category,
      brand,
    };
    const watchs: Watch[] = await loadWatch.execute(params);
    return NextResponse.json(watchs);
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}
