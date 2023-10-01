import { LoadWatchUseCaseRequest } from "@/core/watch/load-watch-use-case";

export interface loadWatchsValidation {
  validate(body: any): Promise<LoadWatchUseCaseRequest>;
}
