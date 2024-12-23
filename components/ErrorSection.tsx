'use client';
import UiAlertDanger from '@/ui/UiAlertDanger';
import UiPrimaryButton from '@/ui/UiPrimaryButton';
import { useRouter } from 'next/navigation';

function ErrorSection() {
  const router = useRouter();

  return (
    <UiAlertDanger title="Something went wrong">
      <UiPrimaryButton onClick={router.refresh}>Retry</UiPrimaryButton>
    </UiAlertDanger>
  );
}

export default ErrorSection;
