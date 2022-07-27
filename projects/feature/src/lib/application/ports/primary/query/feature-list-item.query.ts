export class FeatureListItemQuery {
  public readonly voters: number;
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly type: string,
    public readonly id: string,
    public readonly creator: string | null,
    private readonly _voters: string[]
  ) {
    this.voters = [...new Set(this._voters)].length;
  }
}
