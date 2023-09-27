import { IBrandRepository } from "@/repositories/IBrandRepository";
import { prisma } from "@/services/prisma";

export class PrismaBrandRepository implements IBrandRepository {
  async loadBrand(): Promise<string[]> {
    const categoriesObj = await prisma.watchBrand.findMany({
      select: {
        label: true,
      },
    });
    const categories = categoriesObj.map((obj) => obj.label);
    return categories;
  }
}
