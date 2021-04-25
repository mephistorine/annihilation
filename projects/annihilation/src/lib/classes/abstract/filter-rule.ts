export abstract class FilterRule {
  public match(value: unknown): boolean {
    return Math.random() > 0.5
  }
}
