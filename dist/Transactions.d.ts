import 'isomorphic-fetch';
import { ApiMode, WithApiMode } from './ApiMode';
import { ClientBase } from './ClientBase';
export declare type TransactionsByBlockOrAddressQuery = {
    readonly block?: string;
    readonly address?: string;
};
export declare class Transactions extends ClientBase {
    readonly byId: TransactionById;
    readonly byBlockOrAddress: TransactionsByBlockOrAddress;
    readonly rawById: RawTransactionById;
    readonly send: TransactionSend;
    constructor(apiMode: ApiMode, fetch: any);
}
export declare class TransactionById extends ClientBase {
    readonly path: string;
    url(txid: string): string;
    get(txid: string): any;
}
export declare class TransactionsByBlockOrAddress extends WithApiMode {
    readonly path: string;
    url(query: TransactionsByBlockOrAddressQuery): string;
    get(query: TransactionsByBlockOrAddressQuery): Promise<any>;
}
export declare class RawTransactionById extends WithApiMode {
    readonly path: string;
    url(rawid: string): string;
    get(rawid: string): Promise<any>;
}
export declare class TransactionSend extends ClientBase {
    readonly path: string;
    url(): string;
    post(rawtx: string): any;
}
