import { AxiosError } from 'axios';
import { UseMutationOptions, UseQueryOptions } from 'react-query';

export type QueryOptions<T = unknown> = UseQueryOptions<T, AxiosError>;
export type MutationOptions<
  TData = unknown,
  TVariables = TData
> = UseMutationOptions<TData, AxiosError, TVariables>;
