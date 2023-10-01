import { Watch } from "@prisma/client";

export interface WatchRepository {
  loadAllWatchs(): Promise<Watch[]>;
  loadWatchWithFilter(
    page: number,
    category: string | null,
    brand: string | null,
    priceMin: number | null,
    priceMax: number | null
  ): Promise<Watch[]>;
}
