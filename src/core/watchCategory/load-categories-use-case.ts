import { CategoryRepository } from "@/repositories/category-repository";

export class LoadCategoriesUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(): Promise<string[]> {
    const categories = await this.categoryRepository.loadAllCategories();
    return categories;
  }
}
