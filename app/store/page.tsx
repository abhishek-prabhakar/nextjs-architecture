'use client';
import { useStoreOutreachCircle } from '@/store/outreachcircle.store';
import { useEffect } from 'react';
import ChildComponent from './ChildComponent';
import { useFeature } from '@/feature/feature';
import useApiGetOcBasicInfo from '@/api/get-oc-basic-info.api';

export default function Form() {
  const oc = useApiGetOcBasicInfo('oc-id');

  return (
    <div>
      <b>Showing OC Name from parent: {oc?.name}</b>

      <ChildComponent />
    </div>
  );
}
