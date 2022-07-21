export class CreateFeatureCommand {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly type: string
  ) {}
}
