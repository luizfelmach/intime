import { ICategoryRepository } from "@/repositories/ICategoryRepository";

export class LoadCategoriesUseCase {
  private categoryRepository: ICategoryRepository;
  constructor(categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(): Promise<string[]> {
    const categories = await this.categoryRepository.loadCategory();
    return categories;
  }
}
