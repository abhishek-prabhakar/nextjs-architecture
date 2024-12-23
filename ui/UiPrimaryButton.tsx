import { Button } from '@mantine/core';

function UiPrimaryButton({
  children,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  onClick?: Function;
}>) {
  return (
    <Button
      type="submit"
      onClick={() => onClick?.apply(null)}
      variant="primary"
      color="blue"
    >
      {children}
    </Button>
  );
}

export default UiPrimaryButton;
