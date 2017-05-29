export declare const Livenet = "https://insight.bitpay.com/api";
export declare const Testnet = "https://test-insight.bitpay.com/api";
export declare enum ApiMode {
    Live = 0,
    Test = 1,
}
export declare function apiModeToUrl(apiMode: ApiMode): "https://insight.bitpay.com/api" | "https://test-insight.bitpay.com/api";
export declare abstract class WithApiMode {
    readonly apiMode: ApiMode;
    constructor(apiMode: ApiMode);
    readonly apiUrl: string;
}
