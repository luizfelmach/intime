import { PrismaCategoryRepository } from "@/implementations/prisma-category-repository";
import { LoadCategoriesUseCase } from "@/useCases/load-categories-use-case";

const categoryRepository = new PrismaCategoryRepository();
export const loadCategory = new LoadCategoriesUseCase(categoryRepository);
