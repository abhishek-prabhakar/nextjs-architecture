'use client';

import forceError from './forceError';

export default function ErrorComponent() {
  forceError();

  return <div>You cant see this</div>;
}
