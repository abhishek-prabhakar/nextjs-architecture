'use client';
import actionGuard from '@/guards/actionGuard';
import userGuard from '@/guards/userGuard';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

export default actionGuard(userGuard(Layout));
