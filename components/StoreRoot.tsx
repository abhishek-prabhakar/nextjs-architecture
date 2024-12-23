'use client';
import { initOutreachCircleStore } from '@/store/outreachcircle.store';
import StoreContext from '@/store/store';
import { initUserStore } from '@/store/user.store';
import { JSX, ReactNode } from 'react';

const StoreRoot = ({ children }: { children: JSX.Element | ReactNode }) => {
  const outreachCircle = initOutreachCircleStore();
  const user = initUserStore();

  return (
    <StoreContext.Provider value={{ user, outreachCircle }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreRoot };
