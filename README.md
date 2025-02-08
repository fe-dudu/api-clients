# Intro

This is a tool for extracting Swagger types from an MSA server built on [**openapi-typescript**](https://openapi-ts.dev/cli#auth) and publishing them as an open-source npm package.

# Usage
```js
import { apiErrorMiddleware, historyClient, HistoryApiGetResponseTypes  } from 'api-clients';

// 'test' | 'stage' | 'prod'
const client = historyClient('prod');
// throw api error
client.use(apiErrorMiddleware);

const { data, error } = await client.GET('/history/v1/evm/{network}/{walletAddress}/{handler}', {
  params: { path: { network: '1', walletAddress: '0x...', handler: '1' } },
});

type Handler = HistoryApiGetResponseTypes<'/history/v1/evm/{network}/{walletAddress}/{handler}'>;
// type Handler = {
//     blockNumber: string | null;
//     date: string;
//     hash: string | null;
//     recognizedTransactions: components["schemas"]["RecognizedTransaction"][] | null;
//     signer: string | null;
//     success: boolean;
// }[]

const test = data;
// const test: {
//     blockNumber: string | null;
//     date: string;
//     hash: string | null;
//     recognizedTransactions: components["schemas"]["RecognizedTransaction"][] | null;
//     signer: string | null;
//     success: boolean;
// }[] | undefined

if (data) {
  const test2 = data;
  // const test2: {
  //     blockNumber: string | null;
  //     date: string;
  //     hash: string | null;
  //     recognizedTransactions: components["schemas"]["RecognizedTransaction"][] | null;
  //     signer: string | null;
  //     success: boolean;
  // }[]
}

if (!error) {
  const test3 = data;
  // const test3: {
  //     blockNumber: string | null;
  //     date: string;
  //     hash: string | null;
  //     recognizedTransactions: components["schemas"]["RecognizedTransaction"][] | null;
  //     signer: string | null;
  //     success: boolean;
  // }[]
}
```

# Features

- Fields not defined as nullable are marked as required. (`--properties-required-by-default true`)
- Types are sorted in alphabetical order. (`--alphabetize true`)
- Extracts response types for both GET and POST methods.
- Detects type changes daily via GitHub Actions.

# Settings

- Settings > Actions > General > Workflow permissions > Read and write permissions > Save
- Settings > Secrets And Variables > Actions > New repository secret > PERSONAL_ACCESS_TOKEN
- Settings > Secrets And Variables > Actions > New repository secret > NPM_TOKEN