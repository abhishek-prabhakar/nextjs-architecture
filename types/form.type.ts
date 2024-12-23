type FormControl<I> = keyof I;

type FormSchemaData<T> = T & {
  errors?:
    | {
        [key in FormControl<T>]?: string;
      }
    | null;
  success?: boolean;
  message?: string;
};

type FormError<T> = {
  [key in FormControl<T>]?: string;
};

type FormState<T, E> = {
  data?: T;
  errors?: E;
};

export type { FormState, FormSchemaData, FormError };
