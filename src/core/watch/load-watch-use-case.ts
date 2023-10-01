import { IWatchRepository } from "@/repositories/IWatchRepository";
import { Watch } from "@prisma/client";

type LoadWatchUseCaseRequest = {
  p: string | null;
  category: string | null;
  brand: string | null;
  priceMin: string | null;
  priceMax: string | null;
};

type LoadWatchUseCaseResponse = Watch[];

export class LoadWatchsUseCase {
  constructor(private readonly watchRepository: IWatchRepository) {}

  async execute(
    body: LoadWatchUseCaseRequest
  ): Promise<LoadWatchUseCaseResponse> {
    const { p, brand, category, priceMax, priceMin } = body;
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
