import { Watch } from "@prisma/client";

export interface IWatchRepository {
  loadWatch(): Promise<Watch[]>;
}
