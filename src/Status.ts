import { ApiMode, WithApiMode } from './ApiMode'

export class Sync extends WithApiMode {

  public url() {
    return `${this.apiUrl}/sync`
  }

  public get(q: StatusQuery) {
    return fetch(this.url())
      .then((res: any) => res.json())
  }

}

export class Peer extends WithApiMode {

  public url() {
    return `${this.apiUrl}/peer`
  }

  public get() {
    return fetch(this.url())
      .then((res: any) => res.json())
  }

}

export type StatusQuery = 'getInfo' | 'getDifficulty' | 'getBestBlockHash' | 'getLastBlockHash'

export class Status extends WithApiMode {

  public url(q: StatusQuery) {
    return `${this.apiUrl}/utils/estimatefee?q=${q}`
  }

  public get(q: StatusQuery) {
    return fetch(this.url(q))
      .then((res: any) => res.json())
  }

}

export class Utils extends WithApiMode {
  public readonly EstimateFee: UtilsEstimateFee

  constructor(apiMode: ApiMode) {
    super(apiMode)
    this.EstimateFee = new UtilsEstimateFee(apiMode)
  }
}

export class UtilsEstimateFee extends WithApiMode {
  public url(nbBlocks: number = 2) {
    return `${this.apiUrl}/utils/estimatefee?nbBlocks=${nbBlocks}`
  }

  public get(nbBlocks: number = 2) {
    return fetch(this.url(nbBlocks))
      .then((res: any) => res.json())
  }
}
