import { useFeature } from '@/feature/feature';
import { useStoreOutreachCircle } from '@/store/outreachcircle.store';

type Input = string;

function useApiGetOcBasicInfo(input: Input) {
  const store = useStoreOutreachCircle();
  const [ocLimit, updateOCLimit] = useFeature('OC_LIMIT');
  const [van] = useFeature('VAN_SETUP_DONE');

  // outward connection
  //
  // always update the store from model
  updateOCLimit(10);
  store?.setName('My Oc updated from model');
  return store?.state;
}

export default useApiGetOcBasicInfo;
