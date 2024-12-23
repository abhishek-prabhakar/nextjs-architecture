import useApiCreateOc from '@/api/create-oc.api';
import {
  createNewOutreachCircleSchema,
  CreateNewOutreachCircleSchemaErrorType,
  CreateNewOutreachCircleSchemaType,
} from '@/schemas/create-outreachcircle.schema';
import { FormState } from '@/types/form.type';
import useForm from '@/utils/useForm';
import { useActionState } from 'react';

type State = FormState<
  CreateNewOutreachCircleSchemaType,
  CreateNewOutreachCircleSchemaErrorType
>;

function useActionCreateOc() {
  // const updatedAction = action.bind(null, props.id);

  return useActionState(action, {
    data: {
      name: '',
    },
    errors: {} as CreateNewOutreachCircleSchemaErrorType,
  });
}

function action(prevState: State, formData: FormData) {
  const formState = useForm<CreateNewOutreachCircleSchemaType>(
    createNewOutreachCircleSchema,
    formData
  );

  if (formState?.errors) {
    return formState;
  }

  useApiCreateOc(formState.data);

  return formState;
}

export default useActionCreateOc;
