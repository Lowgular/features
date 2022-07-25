export class FeatureListItemQuery {
  public readonly voters: number;
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly type: string,
    public readonly id: string,
    public readonly creator: string,
    private readonly _voters: string[]
  ) {
    this.voters = this._voters.length;
  }
}
