'use client';
import { useFeature } from '@/feature/feature';
import { useStoreOutreachCircle } from '@/store/outreachcircle.store';

export default function ChildComponent() {
  const oc = useStoreOutreachCircle();
  const [ocLimit] = useFeature('OC_LIMIT');

  return (
    <div>
      Showing Oc Name from child: {oc?.state.name}
      <div>Retrieved a feature to validate OutreachCircle Limit: {ocLimit}</div>
    </div>
  );
}
