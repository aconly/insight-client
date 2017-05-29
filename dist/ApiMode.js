"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livenet = 'https://insight.bitpay.com/api';
exports.Testnet = 'https://test-insight.bitpay.com/api';
var ApiMode;
(function (ApiMode) {
    ApiMode[ApiMode["Live"] = 0] = "Live";
    ApiMode[ApiMode["Test"] = 1] = "Test";
})(ApiMode = exports.ApiMode || (exports.ApiMode = {}));
function apiModeToUrl(apiMode) {
    switch (apiMode) {
        case ApiMode.Live:
            return exports.Livenet;
        case ApiMode.Test:
            return exports.Testnet;
    }
    throw new Error('Invalid apiMode');
}
exports.apiModeToUrl = apiModeToUrl;
class WithApiMode {
    constructor(apiMode) {
        this.apiMode = apiMode;
    }
    get apiUrl() {
        return apiModeToUrl(this.apiMode);
    }
}
exports.WithApiMode = WithApiMode;
