import 'isomorphic-fetch'

import { ApiMode } from './ApiMode'
import { Address } from './Address'
import { Utils } from './Status'
import { Block, BlockIndex, Blocks, RawBlock } from './BlockClient'
import { Transactions } from './Transactions'
import { ClientBase } from './ClientBase'

export class InsightClient extends ClientBase {
  public readonly Address: Address
  public readonly Block: Block
  public readonly Blocks: Blocks
  public readonly BlockIndex: BlockIndex
  public readonly RawBlock: RawBlock
  public readonly Transactions: Transactions
  public readonly Utils: Utils

  constructor(apiMode: ApiMode, fetch: any) {
    super(apiMode, fetch)
    this.Address = new Address(apiMode)
    this.Block = new Block(apiMode)
    this.Blocks = new Blocks(apiMode)
    this.BlockIndex = new BlockIndex(apiMode)
    this.RawBlock = new RawBlock(apiMode)
    this.Transactions = new Transactions(apiMode, fetch)
    this.Utils = new Utils(apiMode)
  }

}
