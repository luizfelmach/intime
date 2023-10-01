import { IWatchRepository } from "@/repositories/IWatchRepository";
import { Watch } from "@prisma/client";

interface LoadWatchUseCaseDTO {
  p: string | null;
  category: string | null;
  brand: string | null;
  priceMin: string | null;
  priceMax: string | null;
}

export class LoadWatchsUseCase {
  private watchRepository: IWatchRepository;
  constructor(watchRepository: IWatchRepository) {
    this.watchRepository = watchRepository;
  }

  async execute({
    p,
    brand,
    category,
    priceMin,
    priceMax,
  }: LoadWatchUseCaseDTO): Promise<Watch[]> {
    if (p === null) {
      throw new Error("p is a required field.");
    }
    if (isNaN(+p)) {
      throw new Error("p is nan.");
    }

    let pMin;

    if (priceMin !== null && isNaN(+priceMin)) {
      throw new Error("priceMin is nan.");
    }
    if (priceMax !== null && isNaN(+priceMax)) {
      throw new Error("priceMax is nan.");
    }

    console.log(p, brand, category);

    const watchs = await this.watchRepository.loadWatchWithFilter(
      +p,
      category,
      brand,
      priceMin ? +priceMin : null,
      priceMax ? +priceMax : null
    );
    return watchs;
  }
}
