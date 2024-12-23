'use client';
import { useContext, useState } from 'react';
import StoreContext from './store';

type User = {
  id: string;
  fullName: string;
};

const initialState = {};

function initUserStore() {
  const [state, setState] = useState<Partial<User>>(initialState);

  function setUserId(id: string) {
    setState({
      ...state,
      id,
    });
  }

  function reset() {
    setState(initialState);
  }

  const mutables = {
    state,
    setUserId,
    reset,
  };

  return mutables;
}

const useStoreUser = () => {
  const store = useContext(StoreContext);
  return store.user;
};

export { useStoreUser, initUserStore };
