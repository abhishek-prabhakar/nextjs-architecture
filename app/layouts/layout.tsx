'use client';
import { useState } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showBanner, hideBanner] = useState(true);

  const Banner = showBanner ? (
    <div>
      <div>Something went wrong with this action</div>
      <button onClick={() => hideBanner(false)}>Hide this message</button>
      <hr />
    </div>
  ) : (
    ''
  );

  return (
    <section>
      {Banner}
      {children}
    </section>
  );
}
