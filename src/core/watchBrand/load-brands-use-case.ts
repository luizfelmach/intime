import { UseCase } from "@/contracts/use-case";
import { BrandRepository } from "@/repositories/brand-repository";

type LoadBrandsUseCaseRequest = void;

type LoadBrandsUseCaseResponse = string[];

export class LoadBrandsUseCase
  implements UseCase<LoadBrandsUseCaseRequest, LoadBrandsUseCaseResponse>
{
  constructor(private readonly brandRepository: BrandRepository) {}

  async perform(): Promise<string[]> {
    const brands = await this.brandRepository.loadAllBrands();
    return brands;
  }
}
