import 'isomorphic-fetch';
import { WithApiMode } from './ApiMode';
export declare type TransactionsByBlockOrAddressQuery = {
    readonly block?: string;
    readonly address?: string;
};
export declare class Transaction extends WithApiMode {
    readonly path: string;
    url(txid: string): string;
    get(txid: string): Promise<any>;
}
export declare class RawTransaction extends WithApiMode {
    readonly path: string;
    url(rawid: string): string;
    get(rawid: string): Promise<any>;
}
export declare class TransactionSend extends WithApiMode {
    readonly path: string;
    url(): string;
    post(rawtx: string): Promise<any>;
}
export declare class TransactionsByBlockOrAddress extends WithApiMode {
    readonly path: string;
    url(query: TransactionsByBlockOrAddressQuery): string;
    get(query: TransactionsByBlockOrAddressQuery): Promise<any>;
}
