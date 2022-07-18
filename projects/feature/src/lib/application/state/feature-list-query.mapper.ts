import { FeatureListQuery } from '../ports/primary/query/feature-list.query';
import { FeatureContext } from '../ports/secondary/context/feature.context';

export const mapFromFeatureContext = (
  context: Partial<FeatureContext>
): FeatureListQuery =>
  new FeatureListQuery(
    (context.all || []).map((feature) => `${feature.title}`)
  );
