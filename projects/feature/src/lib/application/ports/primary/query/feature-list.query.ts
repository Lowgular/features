import { FeatureListItemQuery } from './feature-list-item.query';

export class FeatureListQuery {
  constructor(public readonly items: FeatureListItemQuery[]) {}
}
