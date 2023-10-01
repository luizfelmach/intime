import { UseCase } from "@/contracts/use-case";
import { CategoryRepository } from "@/repositories/category-repository";

type LoadCategoriesUseCaseRequest = void;

type LoadCategoriesUseCaseResponse = string[];

export class LoadCategoriesUseCase
  implements
    UseCase<LoadCategoriesUseCaseRequest, LoadCategoriesUseCaseResponse>
{
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async perform(): Promise<LoadCategoriesUseCaseResponse> {
    const categories = await this.categoryRepository.loadAllCategories();
    return categories;
  }
}
