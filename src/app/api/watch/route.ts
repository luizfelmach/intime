import { loadWatch } from "@/factory/load-watch-factory";
import { loadWatchsValidation } from "@/factory/validations/load-watchs-validation";
import { Watch } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const p = request.nextUrl.searchParams.get("p");
    const category = request.nextUrl.searchParams.get("category");
    const brand = request.nextUrl.searchParams.get("brand");
    const priceMin = request.nextUrl.searchParams.get("priceMin");
    const priceMax = request.nextUrl.searchParams.get("priceMax");
    let params = {
      p,
      category,
      brand,
      priceMin,
      priceMax,
    };
    const body = await loadWatchsValidation.validate(params);
    const watchs: Watch[] = await loadWatch.perform(body);
    return NextResponse.json(watchs);
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}
