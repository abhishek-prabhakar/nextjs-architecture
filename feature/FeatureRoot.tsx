'use client';
import { JSX } from 'react';
import { FeatureContext, initFeature } from './feature';

const FeatureRoot = ({ children }: { children: JSX.Element }) => {
  const feature = initFeature();
  return (
    <FeatureContext.Provider value={feature}>
      {children}
    </FeatureContext.Provider>
  );
};

export { FeatureRoot };
