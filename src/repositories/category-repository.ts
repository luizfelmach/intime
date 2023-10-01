export interface CategoryRepository {
  loadAllCategories(): Promise<string[]>;
}
