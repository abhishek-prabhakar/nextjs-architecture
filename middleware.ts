import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function Middleware(request: NextRequest) {
  // Your Middleware logic here

  // const guards = [ngpGuard(request)];
  // for (let i = 0; i < guards.length; i++) {
  //   const response = guards[i];
  //   if (response) {
  //     return response;
  //   }
  // }
  return NextResponse.next();
}
