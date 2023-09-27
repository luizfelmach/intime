import { loadBrand } from "@/factory/load-brand-repository";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const brands = await loadBrand.execute();
    return NextResponse.json(brands);
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}
