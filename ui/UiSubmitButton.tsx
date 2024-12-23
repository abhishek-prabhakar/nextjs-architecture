import { Button } from '@mantine/core';
import { useFormStatus } from 'react-dom';

function UiSubmitButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending}>
      {children}
    </Button>
  );
}

export default UiSubmitButton;
