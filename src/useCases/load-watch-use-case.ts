import { IWatchRepository } from "@/repositories/IWatchRepository";
import { Watch } from "@prisma/client";

interface LoadWatchUseCaseDTO {
  p: string | null;
  category: string | null;
  brand: string | null;
}

export class LoadWatchUseCase {
  private watchRepository: IWatchRepository;
  constructor(watchRepository: IWatchRepository) {
    this.watchRepository = watchRepository;
  }

  async execute({ p, brand, category }: LoadWatchUseCaseDTO): Promise<Watch[]> {
    if (p === null) {
      throw new Error("p is a required field.");
    }
    if (isNaN(+p)) {
      throw new Error("p is nan.");
    }

    console.log(p, brand, category);

    const watchs = await this.watchRepository.loadWatchWithFilter(
      +p,
      category,
      brand
    );
    return watchs;
  }
}
