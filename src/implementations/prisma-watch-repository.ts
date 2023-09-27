import { IWatchRepository } from "@/repositories/IWatchRepository";
import { prisma } from "@/services/prisma";
import { Watch } from "@prisma/client";

export class PrismaWatchRepository implements IWatchRepository {
  async loadWatch(): Promise<Watch[]> {
    const watchs = await prisma.watch.findMany();
    return watchs;
  }
}
