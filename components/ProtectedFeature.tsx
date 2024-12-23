import { useFeature } from '@/feature/feature';
import { globalFeatures, userFeatureState } from '@/feature/features.data';
import { ExtractKeys } from '@/types/utilities.type';

const booleanKeys = Object.keys(userFeatureState).filter(
  (key) => typeof userFeatureState[key] === 'boolean'
);

function ProtectedFeature({
  featureKey,
  children,
}: {
  featureKey: ExtractKeys<typeof globalFeatures & typeof userFeatureState>;
  children: JSX.Element;
}) {
  const [userfeatureEnabled] = useFeature(
    featureKey as ExtractKeys<typeof userFeatureState>
  );
  const isEnabled =
    globalFeatures[featureKey as ExtractKeys<typeof globalFeatures>] ||
    userfeatureEnabled;
  return isEnabled && children;
}

export default ProtectedFeature;
