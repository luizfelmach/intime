import { IWatchRepository } from "@/repositories/IWatchRepository";
import { Watch } from "@prisma/client";

export class LoadWatchUseCase {
  private watchRepository: IWatchRepository;
  constructor(watchRepository: IWatchRepository) {
    this.watchRepository = watchRepository;
  }

  async execute(): Promise<Watch[]> {
    const watchs = await this.watchRepository.loadWatch();
    return watchs;
  }
}
