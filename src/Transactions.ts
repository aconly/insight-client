import 'isomorphic-fetch'

import { ApiMode, WithApiMode } from './ApiMode'
import { urlObjectToUrl } from './UrlObject'

export type TransactionsByBlockOrAddressQuery = {
  readonly block?: string,
  readonly address?: string
}

export class Transactions extends WithApiMode {
  public readonly byId: TransactionById
  public readonly byBlockOrAddress: TransactionsByBlockOrAddress
  public readonly rawById: RawTransactionById
  public readonly send: TransactionSend

  constructor(apiMode: ApiMode) {
    super(apiMode)
    this.byId = new TransactionById(apiMode)
    this.byBlockOrAddress = new TransactionsByBlockOrAddress(apiMode)
    this.rawById = new RawTransactionById(apiMode)
    this.send = new TransactionSend(apiMode)
  }
}

export class TransactionById extends WithApiMode {

  public get path() {
    return this.apiUrl + '/tx'
  }

  public url(txid: string) {
    return `${this.path}/${txid}`
  }

  public get(txid: string) {
    return fetch(this.url(txid))
      .then((res: any) => res.json())
  }
}

export class TransactionsByBlockOrAddress extends WithApiMode {

  public get path() {
    return this.apiUrl + '/txs'
  }

  public url(query: TransactionsByBlockOrAddressQuery) {
    return urlObjectToUrl({
      url: this.path,
      query
    })
  }

  public get(query: TransactionsByBlockOrAddressQuery) {
    return fetch(this.url(query))
      .then((res: any) => res.json())
  }
}

export class RawTransactionById extends WithApiMode {

  public get path() {
    return this.apiUrl + '/rawtx'
  }

  public url(rawid: string) {
    return `${this.path}/${rawid}`
  }

  public get(rawid: string) {
    return fetch(this.url(rawid))
      .then((res: any) => res.json())
  }
}

export class TransactionSend extends WithApiMode {

  public get path() {
    return this.apiUrl + '/tx/send'
  }

  public url() {
    return this.path
  }

  public post(rawtx: string) {
    return fetch(this.url(), {
      method: 'POST',
      body: JSON.stringify({ rawtx }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res: any) => res.json())
  }

}