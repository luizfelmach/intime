import { loadWatchById } from "@/factory/load-watch-by-id-factory";
import { Watch } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const watch = await loadWatchById.perform({ id: params.id });
    return NextResponse.json(watch);
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}
