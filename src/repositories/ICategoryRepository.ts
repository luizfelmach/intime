export interface ICategoryRepository {
  loadCategory(): Promise<string[]>;
}
