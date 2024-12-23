import { Alert } from '@mantine/core';

function UiAlertDanger({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <Alert variant="light" color="red" title={title}>
      {children}
    </Alert>
  );
}

export default UiAlertDanger;
