import { TextInput } from '@mantine/core';

type props = {
  defaultValue?: string;
  name: string;
  error?: string | null;
};

function UiTextInput(props: props) {
  return <TextInput type="text" {...props} />;
}

export default UiTextInput;
