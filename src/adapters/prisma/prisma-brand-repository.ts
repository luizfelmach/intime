import { BrandRepository } from "@/repositories/brand-repository";
import { prisma } from "@/services/prisma";

export class PrismaBrandRepository implements BrandRepository {
  async loadAllBrands(): Promise<string[]> {
    const categoriesObj = await prisma.watchBrand.findMany({
      select: {
        label: true,
      },
    });
    const categories = categoriesObj.map((obj) => obj.label);
    return categories;
  }
}
