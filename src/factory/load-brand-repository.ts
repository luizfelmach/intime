import { PrismaBrandRepository } from "@/implementations/prisma-brand-repository";
import { LoadBrandsUseCase } from "@/useCases/load-brands-use-case";

const brandRepository = new PrismaBrandRepository();
export const loadBrand = new LoadBrandsUseCase(brandRepository);
