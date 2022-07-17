import { FeatureDTO } from '../dto/feature.dto';

export interface FeatureContext {
  readonly all: FeatureDTO[] | undefined;
}
