'use client';
import useActionCreateOc from '@/actions/create-oc.action';
import UiSubmitButton from '@/ui/UiSubmitButton';
import UiTextInput from '@/ui/UiTextInput';

export default function Form() {
  const [state, formAction] = useActionCreateOc();

  return (
    <form action={formAction}>
      <fieldset>
        <h3>
          This example explains how a form is being submitted and the
          validations are handled.
        </h3>
        <input type="hidden" name="secret" />
        <UiTextInput
          defaultValue={state.data?.name}
          name="name"
          error={state.errors?.fieldErrors?.name}
        />
        <UiSubmitButton>Submit</UiSubmitButton>
      </fieldset>
    </form>
  );
}
