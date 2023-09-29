import { IWatchRepository } from "@/repositories/IWatchRepository";
import { prisma } from "@/services/prisma";
import { Watch } from "@prisma/client";

export class PrismaWatchRepository implements IWatchRepository {
  async loadWatch(): Promise<Watch[]> {
    const watchs = await prisma.watch.findMany();
    return watchs;
  }

  async loadWatchWithFilter(
    page: number,
    category: string | null,
    brand: string | null
  ): Promise<Watch[]> {
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
      },
      take: 20,
      skip: page * 20,
    });

    return watchs;
  }
}
