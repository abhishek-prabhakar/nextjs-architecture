import { useEffect, useState } from 'react';

function useStacker<T>(arr: T) {
  const [mutatedArray, mutate] = useState((arr as any[]) || []);
  useEffect(() => {
    if (!arr) {
      return;
    }
    mutate(mutatedArray.concat(arr));
  }, [arr]);

  return mutatedArray as T;
}

export default useStacker;
