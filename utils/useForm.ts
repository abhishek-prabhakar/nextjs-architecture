import { ZodObject, ZodRawShape } from 'zod';

function useForm<T>(
  object: ZodObject<any>,
  formData: FormData
): { data: T; errors?: any; output?: any } {
  const formValue = Object.fromEntries(formData) as unknown as T;
  const parse = object.safeParse(formValue);
  const data = parse.data as T;

  if (!parse.success || !data) {
    return {
      data: formValue,
      errors: parse.error?.formErrors,
    };
  }

  return {
    data,
  };
}

export default useForm;
