import { FeatureListItemQuery } from '../ports/primary/query/feature-list-item.query';
import { FeatureListQuery } from '../ports/primary/query/feature-list.query';
import { FeatureContext } from '../ports/secondary/context/feature.context';

export const mapFromFeatureContext = (
  context: Partial<FeatureContext>
): FeatureListQuery =>
  new FeatureListQuery(
    (context.all || []).map(
      (feature) =>
        new FeatureListItemQuery(
          feature.title,
          feature.description,
          feature.type,
          feature.id,
          feature.creator,
          feature.voters
        )
    )
  );
