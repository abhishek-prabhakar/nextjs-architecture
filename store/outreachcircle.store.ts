'use client';
import { useContext, useState } from 'react';
import StoreContext from './store';

type OutreachCircle = {
  id: string;
  name: string;
};

const initialState = {};

function initOutreachCircleStore() {
  const [state, setState] = useState<Partial<OutreachCircle>>(initialState);

  function setName(name: string) {
    setState({
      ...state,
      name,
    });
  }

  function reset() {
    setState(initialState);
  }

  const mutables = {
    state,
    setName,
    reset,
  };

  return mutables;
}

const useStoreOutreachCircle = () => {
  const store = useContext(StoreContext);
  return store.outreachCircle;
};

export { useStoreOutreachCircle, initOutreachCircleStore };
