export interface IBrandRepository {
  loadBrand(): Promise<string[]>;
}
