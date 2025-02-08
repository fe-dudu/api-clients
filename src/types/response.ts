import type { paths as HistoryApiTypes } from './history';
import type { paths as NetworkApiTypes } from './network';
import type { paths as NotificationApiTypes } from './notification';
import type { paths as TokenApiTypes } from './token';

type ResponseDataType<T, Method extends 'get' | 'post'> = {
  [K in keyof T]: T[K] extends {
    [method in Method]: { responses: { 200: { content: { 'application/json': infer R } } } };
  }
    ? R
    : never;
};
type GetResponseDataType<T> = ResponseDataType<T, 'get'>;
type PostResponseDataType<T> = ResponseDataType<T, 'post'>;

export type HistoryApiGetResponseTypes<T extends keyof HistoryApiTypes> = GetResponseDataType<HistoryApiTypes>[T];
export type HistoryApiPostResponseTypes<T extends keyof HistoryApiTypes> = PostResponseDataType<HistoryApiTypes>[T];

export type NetworkApiGetResponseTypes<T extends keyof NetworkApiTypes> = GetResponseDataType<NetworkApiTypes>[T];
export type NetworkApiPostResponseTypes<T extends keyof NetworkApiTypes> = PostResponseDataType<NetworkApiTypes>[T];

export type NotificationApiGetResponseTypes<T extends keyof NotificationApiTypes> =
  GetResponseDataType<NotificationApiTypes>[T];
export type NotificationApiPostResponseTypes<T extends keyof NotificationApiTypes> =
  PostResponseDataType<NotificationApiTypes>[T];

export type TokenApiGetResponseTypes<T extends keyof TokenApiTypes> = GetResponseDataType<TokenApiTypes>[T];
export type TokenApiPostResponseTypes<T extends keyof TokenApiTypes> = PostResponseDataType<TokenApiTypes>[T];
