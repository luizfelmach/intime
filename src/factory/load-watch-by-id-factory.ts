import { PrismaWatchRepository } from "@/adapters/prisma/prisma-watch-repository";
import { LoadWatchByIdUseCase } from "@/core/watch/load-watch-by-id-use-case";

const watchRepository = new PrismaWatchRepository();

export const loadWatchById = new LoadWatchByIdUseCase(watchRepository);
