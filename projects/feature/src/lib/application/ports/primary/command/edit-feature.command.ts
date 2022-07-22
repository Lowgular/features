export class EditFeatureCommand {
  constructor(public readonly id: string, public readonly title: string, public readonly type: string, public readonly description: string) {
  }
}
