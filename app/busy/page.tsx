'user client';

import Loader from '@/components/Loader';
import { Suspense } from 'react';

async function Segment() {
  const data = new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  const ready = await data;

  return <div>Section Data is loaded</div>;
}

export default async function Page() {
  const data = new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  const ready = await data;

  return (
    <div>
      <div>Data is loaded</div>
      <Suspense fallback={<Loader />}>
        <Segment />
      </Suspense>
    </div>
  );
}
