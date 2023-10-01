import { PrismaWatchRepository } from "@/adapters/prisma-watch-repository";
import { LoadWatchUseCase } from "@/core/watch/load-watch-use-case";

const watchRepository = new PrismaWatchRepository();

export const loadWatch = new LoadWatchUseCase(watchRepository);
