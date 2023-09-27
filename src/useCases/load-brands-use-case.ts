import { IBrandRepository } from "@/repositories/IBrandRepository";

export class LoadBrandsUseCase {
  private brandRepository: IBrandRepository;
  constructor(brandRepository: IBrandRepository) {
    this.brandRepository = brandRepository;
  }

  async execute(): Promise<string[]> {
    const brands = await this.brandRepository.loadBrand();
    return brands;
  }
}
