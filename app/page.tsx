'use client';
import ProtectedFeature from '@/components/ProtectedFeature';
import { useFeature } from '@/feature/feature';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  return (
    <div>
      <div>mainpage</div>

      <ul>
        <li>
          <Link href="/ngp">Protected page using Guard</Link>
        </li>
        <ProtectedFeature featureKey="VAN_SETUP_DONE">
          <li>
            <Link href="/actions">
              You got access to this protected feature.
            </Link>
          </li>
        </ProtectedFeature>
        <li>
          <Link href="/form">Example Form</Link>
        </li>
        <li>
          <Link href="/gql">Simple backend connection using Api Hook</Link>
        </li>
        <li>
          <Link href="/store">Involvement of Store</Link>
        </li>
      </ul>
    </div>
  );
}
