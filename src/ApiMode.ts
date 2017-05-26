export const Livenet = 'https://insight.bitpay.com/api'
export const Testnet = 'https://test-insight.bitpay.com/api'

export enum ApiMode {
  Live, Test
}

export function apiModeToUrl(apiMode: ApiMode) {
  switch (apiMode) {
    case ApiMode.Live:
      return Livenet
    case ApiMode.Test:
      return Testnet
  }
  throw new Error('Invalid apiMode')
}

export abstract class WithApiMode {
  public readonly apiMode: ApiMode

  constructor(apiMode: ApiMode) {
    this.apiMode = apiMode
  }

  public get apiUrl() {
    return apiModeToUrl(this.apiMode)
  }
}

