"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
const ApiMode_1 = require("./ApiMode");
const UrlObject_1 = require("./UrlObject");
class Transaction extends ApiMode_1.WithApiMode {
    get path() {
        return this.apiUrl + '/tx';
    }
    url(txid) {
        return `${this.path}/${txid}`;
    }
    get(txid) {
        return fetch(this.url(txid))
            .then((res) => res.json());
    }
}
exports.Transaction = Transaction;
class RawTransaction extends ApiMode_1.WithApiMode {
    get path() {
        return this.apiUrl + '/rawtx';
    }
    url(rawid) {
        return `${this.path}/${rawid}`;
    }
    get(rawid) {
        return fetch(this.url(rawid))
            .then((res) => res.json());
    }
}
exports.RawTransaction = RawTransaction;
class TransactionSend extends ApiMode_1.WithApiMode {
    get path() {
        return this.apiUrl + '/tx/send';
    }
    url() {
        return this.path;
    }
    post(rawtx) {
        return fetch(this.url(), {
            method: 'POST',
            body: JSON.stringify({ rawtx }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json());
    }
}
exports.TransactionSend = TransactionSend;
class TransactionsByBlockOrAddress extends ApiMode_1.WithApiMode {
    get path() {
        return this.apiUrl + '/txs';
    }
    url(query) {
        return UrlObject_1.urlObjectToUrl({
            url: this.path,
            query
        });
    }
    get(query) {
        return fetch(this.url(query))
            .then((res) => res.json());
    }
}
exports.TransactionsByBlockOrAddress = TransactionsByBlockOrAddress;
