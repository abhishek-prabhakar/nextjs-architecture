type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type ExtractKeys<I> = keyof I;

export type { Nullable, ExtractKeys };
