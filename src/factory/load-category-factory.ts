import { PrismaCategoryRepository } from "@/implementations/prisma-category-repository";
import { LoadCategoriesUseCase } from "@/core/watchCategory/load-categories-use-case";

const categoryRepository = new PrismaCategoryRepository();
export const loadCategory = new LoadCategoriesUseCase(categoryRepository);
