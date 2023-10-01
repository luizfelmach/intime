import { UseCase } from "@/contracts/use-case";
import { WatchRepository } from "@/repositories/watch-repository";
import { Watch } from "@prisma/client";

type LoadWatchUseCaseRequest = {
  p?: number;
  category?: string;
  brand?: string;
  priceMin?: number;
  priceMax?: number;
};

type LoadWatchUseCaseResponse = Watch[];

export class LoadWatchsUseCase
  implements UseCase<LoadWatchUseCaseRequest, LoadWatchUseCaseResponse>
{
  constructor(private readonly watchRepository: WatchRepository) {}

  async perform(
    body: LoadWatchUseCaseRequest
  ): Promise<LoadWatchUseCaseResponse> {
    const watchs = await this.watchRepository.loadWatchWithFilter(body);
    return watchs;
  }
}
