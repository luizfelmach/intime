import { Watch } from "@prisma/client";

export type LoadloadWatchWithFilterRequest = {
  p?: number;
  category?: string;
  brand?: string;
  priceMin?: number;
  priceMax?: number;
};

export interface WatchRepository {
  loadAllWatchs(): Promise<Watch[]>;
  loadWatchWithFilter(data: LoadloadWatchWithFilterRequest): Promise<Watch[]>;
}
