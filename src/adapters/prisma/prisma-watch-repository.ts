import {
  LoadloadWatchWithFilterRequest,
  WatchRepository,
} from "@/repositories/watch-repository";

import { prisma } from "@/services/prisma";
import { Watch } from "@prisma/client";

export class PrismaWatchRepository implements WatchRepository {
  async loadAllWatchs(): Promise<Watch[]> {
    const watchs = await prisma.watch.findMany();
    return watchs;
  }

  async loadWatchWithFilter(
    data: LoadloadWatchWithFilterRequest
  ): Promise<Watch[]> {
    const { brand, category, page, priceMax, priceMin } = data;
    const watchs = await prisma.watch.findMany({
      where: {
        WatchCategory: {
          label: {
            equals: category || undefined,
          },
        },
        WatchBrand: {
          label: {
            equals: brand || undefined,
          },
        },
        price: {
          gte: priceMin || undefined,
          lte: priceMax || undefined,
        },
      },
      take: 20,
      skip: page || 0 * 20,
    });

    return watchs;
  }
}
