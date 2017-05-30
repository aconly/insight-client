"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
const ApiMode_1 = require("./ApiMode");
const UrlObject_1 = require("./UrlObject");
const ClientBase_1 = require("./ClientBase");
class Transactions extends ClientBase_1.ClientBase {
    constructor(apiMode, fetch) {
        super(apiMode, fetch);
        this.byId = new TransactionById(apiMode, fetch);
        this.byBlockOrAddress = new TransactionsByBlockOrAddress(apiMode);
        this.byAddress = new TransactionsByAddress(apiMode);
        this.rawById = new RawTransactionById(apiMode);
        this.send = new TransactionSend(apiMode, fetch);
    }
}
exports.Transactions = Transactions;
class TransactionById extends ClientBase_1.ClientBase {
    get path() {
        return this.apiUrl + '/tx';
    }
    url(txid) {
        return `${this.path}/${txid}`;
    }
    get(txid) {
        return this.fetch(this.url(txid))
            .then((res) => res.json());
    }
}
exports.TransactionById = TransactionById;
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
class TransactionsByAddress extends ApiMode_1.WithApiMode {
    get path() {
        return this.apiUrl + '/txs';
    }
    url(address) {
        return UrlObject_1.urlObjectToUrl({
            url: this.path,
            query: {
                address
            }
        });
    }
    get(address) {
        return fetch(this.url(address))
            .then((res) => res.json());
    }
}
exports.TransactionsByAddress = TransactionsByAddress;
class RawTransactionById extends ApiMode_1.WithApiMode {
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
exports.RawTransactionById = RawTransactionById;
class TransactionSend extends ClientBase_1.ClientBase {
    get path() {
        return this.apiUrl + '/tx/send';
    }
    url() {
        return this.path;
    }
    post(rawtx) {
        return this.fetch(this.url(), {
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
