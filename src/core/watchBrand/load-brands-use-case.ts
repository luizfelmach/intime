import { BrandRepository } from "@/repositories/brand-repository";

export class LoadBrandsUseCase {
  constructor(private readonly brandRepository: BrandRepository) {}

  async execute(): Promise<string[]> {
    const brands = await this.brandRepository.loadBrand();
    return brands;
  }
}
