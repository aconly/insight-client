import 'isomorphic-fetch'

import { ApiMode, WithApiMode } from './ApiMode'
import { Address } from './Address'
import { Utils } from './Status'
import { Block, BlockIndex, Blocks, RawBlock } from './BlockClient'
import { Transactions } from './Transactions'

export class InsightClient extends WithApiMode {
  public readonly Address: Address
  public readonly Block: Block
  public readonly Blocks: Blocks
  public readonly BlockIndex: BlockIndex
  public readonly RawBlock: RawBlock
  public readonly Transactions: Transactions
  public readonly Utils: Utils

  constructor(apiMode: ApiMode) {
    super(apiMode)
    this.Address = new Address(apiMode)
    this.Block = new Block(apiMode)
    this.Blocks = new Blocks(apiMode)
    this.BlockIndex = new BlockIndex(apiMode)
    this.RawBlock = new RawBlock(apiMode)
    this.Transactions = new Transactions(apiMode)
    this.Utils = new Utils(apiMode)
  }

}
