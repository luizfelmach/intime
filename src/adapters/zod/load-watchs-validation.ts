import { LoadWatchUseCaseRequest } from "@/core/watch/load-watch-use-case";
import { loadWatchsValidation } from "@/helpers/load-watchs-validation";
import { z } from "zod";

const loadsWatchsSchema = z.object({
  p: z.preprocess(Number, z.number()).optional(),
  brand: z.string().optional(),
  category: z.string().optional(),
  priceMax: z.preprocess(Number, z.number()).optional(),
  priceMin: z.preprocess(Number, z.number()).optional(),
});

export class ZodLoadWatchsValidation implements loadWatchsValidation {
  async validate(body: any): Promise<LoadWatchUseCaseRequest> {
    const newBody = await loadsWatchsSchema.parse(body);
    return newBody;
  }
}
