'use client';
import useApiGetShips from '@/api/getShips.api';
import useStacker from '@/utils/useStacker';
import { useEffect, useState } from 'react';

export default function GqlPage() {
  const [count, setCount] = useState(5);
  const data = useApiGetShips(count);
  const results = useStacker(data.data);

  return (
    <div>
      <button onClick={() => setCount(count + 5)}>Next page</button>
      <hr />
      {JSON.stringify(results)}
    </div>
  );
}
