'use client';
import { useEffect } from 'react';
import ErrorComponent from './ChildComponentWithError';

export default function Page() {
  useEffect(() => {
    console.log('error page loaded');
  }, []);
  return (
    <div>
      <ErrorComponent />
    </div>
  );
}
