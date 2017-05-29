import 'isomorphic-fetch';
import { ApiMode, WithApiMode } from './ApiMode';
import { Address } from './AddressClient';
import { Utils } from './Status';
import { Block, BlockIndex, Blocks, RawBlock } from './BlockClient';
export declare class Client extends WithApiMode {
    readonly Address: Address;
    readonly Block: Block;
    readonly Blocks: Blocks;
    readonly BlockIndex: BlockIndex;
    readonly RawBlock: RawBlock;
    readonly Utils: Utils;
    constructor(apiMode: ApiMode);
}
