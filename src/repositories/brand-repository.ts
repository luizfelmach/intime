export interface BrandRepository {
  loadBrand(): Promise<string[]>;
}
