import { ICategoryRepository } from "@/repositories/ICategoryRepository";
import { prisma } from "@/services/prisma";

export class PrismaCategoryRepository implements ICategoryRepository {
  async loadCategory(): Promise<string[]> {
    const categoriesObj = await prisma.watchCategory.findMany({
      select: {
        label: true,
      },
    });
    const categories = categoriesObj.map((obj) => obj.label);
    return categories;
  }
}
