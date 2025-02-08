import createClient from 'openapi-fetch';
import type { Environment } from '../types/env';
import type { paths } from '../types/history';

const URLS: Record<Environment, string> = {
  test: 'https://api-test.creditcoin.org',
  stage: 'https://api-staging.creditcoin.org',
  prod: 'https://api.creditcoin.org',
} as const;

export const historyClient = (env: Environment) => createClient<paths>({ baseUrl: URLS[env] });
