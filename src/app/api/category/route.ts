import { loadCategory } from "@/factory/load-category-factory";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const categories = await loadCategory.execute();
    return NextResponse.json(categories);
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}
