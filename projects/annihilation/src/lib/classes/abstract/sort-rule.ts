export abstract class SortRule {
  public compare(a: unknown, b: unknown): number {
    return Math.random()
  }
}
