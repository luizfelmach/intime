import { Watch } from "@prisma/client";

export interface IWatchRepository {
  loadWatch(): Promise<Watch[]>;
  loadWatchWithFilter(
    page: number,
    category: string | null,
    brand: string | null
  ): Promise<Watch[]>;
}
