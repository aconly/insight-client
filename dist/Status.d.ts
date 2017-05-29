import { ApiMode, WithApiMode } from './ApiMode';
export declare class Sync extends WithApiMode {
    url(): string;
    get(q: StatusQuery): Promise<any>;
}
export declare class Peer extends WithApiMode {
    url(): string;
    get(): Promise<any>;
}
export declare type StatusQuery = 'getInfo' | 'getDifficulty' | 'getBestBlockHash' | 'getLastBlockHash';
export declare class Status extends WithApiMode {
    url(q: StatusQuery): string;
    get(q: StatusQuery): Promise<any>;
}
export declare class Utils extends WithApiMode {
    readonly EstimateFee: UtilsEstimateFee;
    constructor(apiMode: ApiMode);
}
export declare class UtilsEstimateFee extends WithApiMode {
    url(nbBlocks?: number): string;
    get(nbBlocks?: number): Promise<any>;
}
