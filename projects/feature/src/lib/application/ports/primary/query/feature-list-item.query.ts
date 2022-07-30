export class FeatureListItemQuery {
  public readonly voters: number;
  public readonly isBug: boolean;

  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly type: string,
    public readonly id: string,
    public readonly creator: string,
    private readonly _voters: string[]
  ) {
    this.voters = [...new Set(this._voters)].length;
    this.isBug = this.type === 'bug' ? true : false;
  }
}
