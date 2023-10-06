import {
  LoadloadWatchWithFilterRequest,
  WatchRepository,
} from "@/repositories/watch-repository";

import { prisma } from "@/services/prisma";
import { Watch } from "@prisma/client";

export class PrismaWatchRepository implements WatchRepository {
  async loadWatchById(id: string): Promise<Watch | null> {
    const watch = await prisma.watch.findFirst({
      where: {
        id,
      },
    });
    return watch;
  }

  async loadAllWatchs(): Promise<Watch[]> {
    const watchs = await prisma.watch.findMany();
    return watchs;
  }

  async loadWatchWithFilter(
    data: LoadloadWatchWithFilterRequest
  ): Promise<Watch[]> {
    const { brand, category, p, priceMax, priceMin } = data;
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
      skip: p ? p * 20 : 0,
    });

    return watchs;
  }
}
