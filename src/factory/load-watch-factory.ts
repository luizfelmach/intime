import { PrismaWatchRepository } from "@/adapters/prisma/prisma-watch-repository";
import { LoadWatchsUseCase } from "@/core/watch/load-watch-use-case";

const watchRepository = new PrismaWatchRepository();

export const loadWatch = new LoadWatchsUseCase(watchRepository);
