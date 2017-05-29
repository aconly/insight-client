import 'isomorphic-fetch';
import { ApiMode } from './ApiMode';
import { Address } from './Address';
import { Utils } from './Status';
import { Block, BlockIndex, Blocks, RawBlock } from './BlockClient';
import { Transactions } from './Transactions';
import { ClientBase } from './ClientBase';
export declare class InsightClient extends ClientBase {
    readonly Address: Address;
    readonly Block: Block;
    readonly Blocks: Blocks;
    readonly BlockIndex: BlockIndex;
    readonly RawBlock: RawBlock;
    readonly Transactions: Transactions;
    readonly Utils: Utils;
    constructor(apiMode: ApiMode, fetch: any);
}
