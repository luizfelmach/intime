export interface BrandRepository {
  loadAllBrands(): Promise<string[]>;
}
