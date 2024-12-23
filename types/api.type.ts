import { ApolloError } from '@apollo/client';

type Data<T> = T | undefined;

type ApiData<T> = {
  loading: Boolean;
  error: ApolloError | undefined;
  data: Data<T>;
};


export type {
  ApiData
}