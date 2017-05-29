import 'isomorphic-fetch';
import { ApiMode, WithApiMode } from './ApiMode';
export interface AddressTransactionsPostBody {
    readonly from?: number;
    readonly to?: number;
    readonly noAsm?: boolean;
    readonly noScriptSig?: boolean;
    readonly noSpent?: boolean;
}
export declare class Address extends WithApiMode {
    readonly Balance: AddressBalance;
    readonly UnconfirmedBalance: AddressUnconfirmedBalance;
    readonly TotalReceived: AddressTotalReceived;
    readonly TotalSent: AddressTotalSent;
    readonly Utxos: AddressUtxo;
    readonly Transactions: AddressTransactions;
    constructor(apiMode: ApiMode);
    url(address: string, noTxList?: number, from?: number, to?: number): string;
    get(address: string, noTxList?: number, from?: number, to?: number): Promise<any>;
}
export declare class AddressBalance extends WithApiMode {
    url(address: string): string;
    get(address: string): Promise<any>;
}
export declare class AddressTotalReceived extends WithApiMode {
    url(address: string): string;
    get(address: string): Promise<any>;
}
export declare class AddressTotalSent extends WithApiMode {
    url(address: string): string;
    get(address: string): Promise<any>;
}
export declare class AddressUnconfirmedBalance extends WithApiMode {
    url(address: string): string;
    get(address: string): Promise<any>;
}
export declare class AddressUtxo extends WithApiMode {
    url(address?: string | ReadonlyArray<string>): string;
    get(address: string | ReadonlyArray<string>): Promise<any>;
    post(address: string | ReadonlyArray<string>): Promise<any>;
}
export declare class AddressTransactions extends WithApiMode {
    readonly path: string;
    url(address?: string | ReadonlyArray<string>, from?: string, to?: string): string;
    get(address: string | ReadonlyArray<string>, from?: string, to?: string): Promise<any>;
    post(address: string | ReadonlyArray<string>, params?: AddressTransactionsPostBody): Promise<any>;
}
