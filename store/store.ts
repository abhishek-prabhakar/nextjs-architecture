'use client';
import { createContext } from 'react';
import { initOutreachCircleStore } from './outreachcircle.store';
import { initUserStore } from './user.store';

type Store = {
  outreachCircle?: ReturnType<typeof initOutreachCircleStore>;
  user?: ReturnType<typeof initUserStore>;
};

const StoreContext = createContext<Store>({});

export default StoreContext;
