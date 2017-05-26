import 'isomorphic-fetch'

import { ApiMode, WithApiMode } from './ApiMode'
import { urlObjectToUrl } from './UrlObject'

export interface AddressTransactionsPostBody {
  readonly from?: number
  readonly to?: number
  readonly noAsm?: boolean
  readonly noScriptSig?: boolean
  readonly noSpent?: boolean
}

export class Address extends WithApiMode {
  public readonly Balance: AddressBalance
  public readonly UnconfirmedBalance: AddressUnconfirmedBalance
  public readonly TotalReceived: AddressTotalReceived
  public readonly TotalSent: AddressTotalSent
  public readonly Utxos: AddressUtxo
  public readonly Transactions: AddressTransactions

  constructor(apiMode: ApiMode) {
    super(apiMode)
    this.Balance = new AddressBalance(apiMode)
    this.UnconfirmedBalance = new AddressUnconfirmedBalance(apiMode)
    this.TotalReceived = new AddressTotalReceived(apiMode)
    this.TotalSent = new AddressTotalSent(apiMode)
    this.Utxos = new AddressUtxo(apiMode)
    this.Transactions = new AddressTransactions(apiMode)
  }

  public url(address: string, noTxList: number = 1, from?: number, to?: number) {
    return urlObjectToUrl({
      url: `${this.apiUrl}/addr/${address}`,
      query: {
        noTxList,
        from,
        to
      }
    })
  }

  public get(address: string, noTxList: number = 1, from?: number, to?: number) {
    return fetch(this.url(address, noTxList, from, to))
      .then((res: any) => res.json())
  }
}

export class AddressBalance extends WithApiMode {
  public url(address: string) {
    return `${this.apiUrl}/addr/${address}/balance`
  }

  public get(address: string) {
    return fetch(this.url(address))
      .then((res: any) => res.json())
  }
}

export class AddressTotalReceived extends WithApiMode {
  public url(address: string) {
    return `${this.apiUrl}/addr/${address}/totalReceived`
  }

  public get(address: string) {
    return fetch(this.url(address))
      .then((res: any) => res.json())
  }
}

export class AddressTotalSent extends WithApiMode {
  public url(address: string) {
    return `${this.apiUrl}/addr/${address}/totalSent`
  }

  public get(address: string) {
    return fetch(this.url(address))
      .then((res: any) => res.json())
  }
}

export class AddressUnconfirmedBalance extends WithApiMode {
  public url(address: string) {
    return `${this.apiUrl}/addr/${address}/unconfirmedBalance`
  }

  public get(address: string) {
    return fetch(this.url(address))
      .then((res: any) => res.json())
  }
}

export class AddressUtxo extends WithApiMode {
  public url(address?: string | ReadonlyArray<string>) {
    return Array.isArray(address)
      ? `${this.apiUrl}/addrs/${address.join(',')}/utxo`
      : address
        ? `${this.apiUrl}/addrs/${address}/utxo`
        : `${this.apiUrl}/addrs/utxo`
  }

  public get(address: string | ReadonlyArray<string>) {
    return fetch(this.url())
      .then((res: any) => res.json())
  }

  public post(address: string | ReadonlyArray<string>) {
    return fetch(this.url(), {
      method: 'POST',
      body: {
        addrs: Array.isArray(address) ? address : [address]
      }
    }).then((res: any) => res.json())
  }
}

export class AddressTransactions extends WithApiMode {

  public get path() {
    return this.apiUrl + '/addrs'
  }

  public url(address?: string | ReadonlyArray<string>, from?: string, to?: string) {
    return urlObjectToUrl({
      url: Array.isArray(address)
        ? `${this.path}/${address.join(',')}/txs`
        : address
          ? `${this.path}/${address}/txs`
          : `${this.path}/txs`,
      query: {
        from, to
      }
    })
  }

  public get(address: string | ReadonlyArray<string>, from?: string, to?: string) {
    return fetch(this.url(address, from, to))
      .then((res: any) => res.json())
  }

  public post(address: string | ReadonlyArray<string>, params?: AddressTransactionsPostBody) {
    return fetch(this.url(), {
      method: 'POST',
      body: {
        addrs: Array.isArray(address) ? address : [address],
        ...(params || {})
      }
    }).then((res: any) => res.json())
  }
}
