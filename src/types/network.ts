/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/network/v1/gas/{chainId}/suggestedPrice': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['GET GasPrice/SuggestedGasFees'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/network/v1/networks': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['GET Networks/GetNetworks'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/network/v1/networks/{networkName}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['GET Networks/GetNetworkByName'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/network/v1/networks/evm': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['GET EvmNetworks/GetEvmNetworks'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/network/v1/networks/evm/{networkName}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['GET EvmNetworks/GetEvmNetworkByName'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/network/v1/networks/evm/chainid/{chainId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['GET EvmNetworks/GetEvmNetworkByChainId'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/network/v1/networks/substrate': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['GET SubstrateNetworks/GetSubstrateNetworks'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/network/v1/networks/substrate/{networkName}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['GET SubstrateNetworks/GetSubstrateNetworkByName'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/network/v1/networks/substrate/genesis-hash/{hash}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['GET SubstrateNetworks/GetSubstrateNetworkByChainId'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    EvmNetworkDetailResponse: {
      chainId: string | null;
      /** Format: int32 */
      digits: number;
      disabled: boolean;
      displayName: string | null;
      explorers: components['schemas']['ExplorerResponse'][] | null;
      iconUrl: string | null;
      /** Format: int32 */
      id: number;
      name: string | null;
      rpcs: components['schemas']['RpcResponse'][] | null;
      state: string | null;
      symbol: string | null;
      testnet: boolean;
    };
    ExplorerResponse: {
      apiUrl: string | null;
      /** Format: int32 */
      id: number;
      name: string | null;
      networkType: string | null;
      type: string | null;
      url: string | null;
    };
    GasFee: {
      suggestedMaxFeePerGas: string | null;
      suggestedMaxPriorityFeePerGas: string | null;
    };
    NetworkResponse: {
      disabled: boolean;
      displayName: string | null;
      /** Format: int32 */
      id: number;
      name: string | null;
      state: string | null;
      testnet: boolean;
      types: string[] | null;
    };
    RpcResponse: {
      httpsEndpoint: string | null;
      /** Format: int32 */
      id: number;
      isPrivate: boolean;
      network: string | null;
      networkType: string | null;
      wssEndpoint: string | null;
    };
    SubstrateNetworkDetailResponse: {
      /** Format: int32 */
      digits: number;
      disabled: boolean;
      displayName: string | null;
      explorers: components['schemas']['ExplorerResponse'][] | null;
      genesisHash: string | null;
      /** Format: int32 */
      id: number;
      name: string | null;
      rpcs: components['schemas']['RpcResponse'][] | null;
      state: string | null;
      symbol: string | null;
      testnet: boolean;
    };
    SuggestedGasFees: {
      estimatedBaseFee: string | null;
      high: components['schemas']['GasFee'];
      low: components['schemas']['GasFee'];
      medium: components['schemas']['GasFee'];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  'GET GasPrice/SuggestedGasFees': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        chainId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['SuggestedGasFees'];
          'text/json': components['schemas']['SuggestedGasFees'];
          'text/plain': components['schemas']['SuggestedGasFees'];
        };
      };
    };
  };
  'GET Networks/GetNetworks': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['NetworkResponse'][];
          'text/json': components['schemas']['NetworkResponse'][];
          'text/plain': components['schemas']['NetworkResponse'][];
        };
      };
    };
  };
  'GET Networks/GetNetworkByName': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        networkName: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['NetworkResponse'];
          'text/json': components['schemas']['NetworkResponse'];
          'text/plain': components['schemas']['NetworkResponse'];
        };
      };
    };
  };
  'GET EvmNetworks/GetEvmNetworks': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['EvmNetworkDetailResponse'][];
          'text/json': components['schemas']['EvmNetworkDetailResponse'][];
          'text/plain': components['schemas']['EvmNetworkDetailResponse'][];
        };
      };
    };
  };
  'GET EvmNetworks/GetEvmNetworkByName': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        networkName: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['EvmNetworkDetailResponse'];
          'text/json': components['schemas']['EvmNetworkDetailResponse'];
          'text/plain': components['schemas']['EvmNetworkDetailResponse'];
        };
      };
    };
  };
  'GET EvmNetworks/GetEvmNetworkByChainId': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        chainId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['EvmNetworkDetailResponse'];
          'text/json': components['schemas']['EvmNetworkDetailResponse'];
          'text/plain': components['schemas']['EvmNetworkDetailResponse'];
        };
      };
    };
  };
  'GET SubstrateNetworks/GetSubstrateNetworks': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['SubstrateNetworkDetailResponse'][];
          'text/json': components['schemas']['SubstrateNetworkDetailResponse'][];
          'text/plain': components['schemas']['SubstrateNetworkDetailResponse'][];
        };
      };
    };
  };
  'GET SubstrateNetworks/GetSubstrateNetworkByName': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        networkName: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['SubstrateNetworkDetailResponse'];
          'text/json': components['schemas']['SubstrateNetworkDetailResponse'];
          'text/plain': components['schemas']['SubstrateNetworkDetailResponse'];
        };
      };
    };
  };
  'GET SubstrateNetworks/GetSubstrateNetworkByChainId': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        hash: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['SubstrateNetworkDetailResponse'];
          'text/json': components['schemas']['SubstrateNetworkDetailResponse'];
          'text/plain': components['schemas']['SubstrateNetworkDetailResponse'];
        };
      };
    };
  };
}
