"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiMode_1 = require("./ApiMode");
class Sync extends ApiMode_1.WithApiMode {
    url() {
        return `${this.apiUrl}/sync`;
    }
    get(q) {
        return fetch(this.url())
            .then((res) => res.json());
    }
}
exports.Sync = Sync;
class Peer extends ApiMode_1.WithApiMode {
    url() {
        return `${this.apiUrl}/peer`;
    }
    get() {
        return fetch(this.url())
            .then((res) => res.json());
    }
}
exports.Peer = Peer;
class Status extends ApiMode_1.WithApiMode {
    url(q) {
        return `${this.apiUrl}/utils/estimatefee?q=${q}`;
    }
    get(q) {
        return fetch(this.url(q))
            .then((res) => res.json());
    }
}
exports.Status = Status;
class Utils extends ApiMode_1.WithApiMode {
    constructor(apiMode) {
        super(apiMode);
        this.EstimateFee = new UtilsEstimateFee(apiMode);
    }
}
exports.Utils = Utils;
class UtilsEstimateFee extends ApiMode_1.WithApiMode {
    url(nbBlocks = 2) {
        return `${this.apiUrl}/utils/estimatefee?nbBlocks=${nbBlocks}`;
    }
    get(nbBlocks = 2) {
        return fetch(this.url(nbBlocks))
            .then((res) => res.json());
    }
}
exports.UtilsEstimateFee = UtilsEstimateFee;
