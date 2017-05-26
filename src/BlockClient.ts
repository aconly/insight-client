import 'isomorphic-fetch'

import { ApiMode, WithApiMode } from './ApiMode'
import { urlObjectToUrl } from './UrlObject'

export class Blocks extends WithApiMode {

  constructor(apiMode: ApiMode) {
    super(apiMode)
  }

  public url(limit: number, date: Date) {
    return urlObjectToUrl({
      url: `${this.apiUrl}/blocks`,
      query: {
        limit,
        date: date.toISOString()
      }
    })
  }

  public get(limit: number, date: Date) {
    return fetch(this.url(limit, date))
      .then((res: any) => res.json())
  }

}

export class Block extends WithApiMode {

  constructor(apiMode: ApiMode) {
    super(apiMode)
  }

  public url(hash: string) {
    return `${this.apiUrl}/block/${hash}`
  }

  public get(hash: string) {
    return fetch(this.url(hash))
      .then((res: any) => res.json())
  }

}

export class BlockIndex extends WithApiMode {

  constructor(apiMode: ApiMode) {
    super(apiMode)
  }

  public url(height: string) {
    return `${this.apiUrl}/block-index/${height}`
  }

  public get(height: string) {
    return fetch(this.url(height))
      .then((res: any) => res.json())
  }

}

export class RawBlock extends WithApiMode {

  constructor(apiMode: ApiMode) {
    super(apiMode)
  }

  public url(blockHashOrHeight: string) {
    return `${this.apiUrl}/rawblock/${blockHashOrHeight}`
  }

  public get(blockHashOrHeight: string) {
    return fetch(this.url(blockHashOrHeight))
      .then((res: any) => res.json())
  }

}

