import { ApiMode, WithApiMode } from './ApiMode'

export class ClientBase extends WithApiMode {
  public readonly fetch: any // TODO: type this?

  constructor(apiMode: ApiMode, fetch: any) {
    super(apiMode)
    this.fetch = fetch
  }
}