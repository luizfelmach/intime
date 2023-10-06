import { UseCase } from "@/contracts/use-case";
import { WatchRepository } from "@/repositories/watch-repository";
import { Watch } from "@prisma/client";

export type LoadWatchByIdUseCaseRequest = {
  id: string;
};

type LoadWatchByIdUseCaseResponse = Watch | null;

export class LoadWatchByIdUseCase
  implements UseCase<LoadWatchByIdUseCaseRequest, LoadWatchByIdUseCaseResponse>
{
  constructor(private readonly watchRepository: WatchRepository) {}

  async perform(
    body: LoadWatchByIdUseCaseRequest
  ): Promise<LoadWatchByIdUseCaseResponse> {
    const watch = await this.watchRepository.loadWatchById(body.id);
    return watch;
  }
}
