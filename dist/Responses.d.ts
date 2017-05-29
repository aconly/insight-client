export interface TransactionsByAddressResource {
    readonly pagesTotal: number;
    readonly txs: ReadonlyArray<Transaction>;
}
export interface Transaction {
    readonly txid: string;
    readonly version: number;
    readonly locktime: number;
    readonly vin: ReadonlyArray<VIn>;
    readonly vout: ReadonlyArray<VOut>;
    readonly blockhash: string;
    readonly blockheight: number;
    readonly confirmations: number;
    readonly time: number;
    readonly blocktime: number;
    readonly valueOut: number;
    readonly size: number;
    readonly valueIn: number;
    readonly fees: number;
}
export interface VIn {
    readonly txid: string;
    readonly vout: number;
    readonly sequence: number;
    readonly n: number;
    readonly scriptSig: ScriptSig;
    readonly addr: string;
    readonly valueSat: number;
    readonly value: number;
    readonly doubleSpentTxID: string;
}
export interface VOut {
    readonly value: string;
    readonly n: number;
    readonly scriptPubKey: ScriptPubKey;
    readonly spentTxId: any;
    readonly spentIndex: any;
    readonly spentHeight: any;
}
export interface ScriptPubKey {
    readonly hex: string;
    readonly asm: string;
    readonly addresses: ReadonlyArray<string>;
    readonly type: string;
}
export interface ScriptSig {
    readonly hex: string;
    readonly asm: string;
}
export declare type UtxosByAddressResponse = ReadonlyArray<UtxoByAddress>;
export interface UtxoByAddress {
    readonly txid: string;
    readonly vout: number;
    readonly satoshis: number;
    readonly confirmations: number;
    readonly ts: number;
    readonly amount: number;
}
