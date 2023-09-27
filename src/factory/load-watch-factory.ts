import { PrismaWatchRepository } from "@/implementations/prisma-watch-repository";
import { LoadWatchUseCase } from "@/useCases/load-watch-use-case";

const watchRepository = new PrismaWatchRepository();

export const loadWatch = new LoadWatchUseCase(watchRepository);
