import { CategoryRepository } from "@/repositories/category-repository";
import { prisma } from "@/services/prisma";

export class PrismaCategoryRepository implements CategoryRepository {
  async loadAllCategories(): Promise<string[]> {
    const categoriesObj = await prisma.watchCategory.findMany({
      select: {
        label: true,
      },
    });
    const categories = categoriesObj.map((obj) => obj.label);
    return categories;
  }
}
