'use client';
import { createContext, useContext, useState } from 'react';
import { ExtractKeys } from '@/types/utilities.type';
import { userFeatureState } from './features.data';

const initialState = userFeatureState;

function initFeature() {
  const [state, setState] = useState(initialState);

  function updateFeature(keyname: string, value: number | boolean) {
    setState({
      ...state,
      [keyname]: value,
    });
  }

  const mutables = {
    state,
    updateFeature,
  };

  return mutables;
}

const FeatureContext = createContext<ReturnType<typeof initFeature>>({
  state: initialState,
  updateFeature: () => null,
});

type PropertyType<T, K extends keyof T> = T[K];

const useFeature = (
  featureKey: ExtractKeys<typeof initialState>
): [number | boolean, (value: number | boolean) => void] => {
  const store = useContext(FeatureContext);

  const currentValue = store.state[featureKey];
  const mutation = (value: typeof currentValue) => {
    store.updateFeature(featureKey, value);
  };

  return [currentValue, mutation];
};

export { FeatureContext, useFeature, initFeature };
