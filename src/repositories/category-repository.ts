export interface CategoryRepository {
  loadCategory(): Promise<string[]>;
}
