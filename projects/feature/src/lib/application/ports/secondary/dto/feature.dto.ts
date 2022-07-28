export interface FeatureDTO {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly type: string;
  readonly status: string;
  readonly creator: string;
  readonly voters: string[];
}
