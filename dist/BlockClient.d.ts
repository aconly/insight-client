import 'isomorphic-fetch';
import { ApiMode, WithApiMode } from './ApiMode';
export declare class Blocks extends WithApiMode {
    constructor(apiMode: ApiMode);
    url(limit: number, date: Date): string;
    get(limit: number, date: Date): Promise<any>;
}
export declare class Block extends WithApiMode {
    constructor(apiMode: ApiMode);
    url(hash: string): string;
    get(hash: string): Promise<any>;
}
export declare class BlockIndex extends WithApiMode {
    constructor(apiMode: ApiMode);
    url(height: string): string;
    get(height: string): Promise<any>;
}
export declare class RawBlock extends WithApiMode {
    constructor(apiMode: ApiMode);
    url(blockHashOrHeight: string): string;
    get(blockHashOrHeight: string): Promise<any>;
}
