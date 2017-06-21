"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
const ApiMode_1 = require("./ApiMode");
const UrlObject_1 = require("./UrlObject");
class Address extends ApiMode_1.WithApiMode {
    constructor(apiMode) {
        super(apiMode);
        this.Balance = new AddressBalance(apiMode);
        this.UnconfirmedBalance = new AddressUnconfirmedBalance(apiMode);
        this.TotalReceived = new AddressTotalReceived(apiMode);
        this.TotalSent = new AddressTotalSent(apiMode);
        this.Utxos = new AddressUtxo(apiMode);
        this.Transactions = new AddressTransactions(apiMode);
    }
    url(address, noTxList = 1, from, to) {
        return UrlObject_1.urlObjectToUrl({
            url: `${this.apiUrl}/addr/${address}`,
            query: {
                noTxList,
                from,
                to
            }
        });
    }
    get(address, noTxList = 1, from, to) {
        return fetch(this.url(address, noTxList, from, to))
            .then((res) => res.json());
    }
}
exports.Address = Address;
class AddressBalance extends ApiMode_1.WithApiMode {
    url(address) {
        return `${this.apiUrl}/addr/${address}/balance`;
    }
    get(address) {
        return fetch(this.url(address))
            .then((res) => res.json());
    }
}
exports.AddressBalance = AddressBalance;
class AddressTotalReceived extends ApiMode_1.WithApiMode {
    url(address) {
        return `${this.apiUrl}/addr/${address}/totalReceived`;
    }
    get(address) {
        return fetch(this.url(address))
            .then((res) => res.json());
    }
}
exports.AddressTotalReceived = AddressTotalReceived;
class AddressTotalSent extends ApiMode_1.WithApiMode {
    url(address) {
        return `${this.apiUrl}/addr/${address}/totalSent`;
    }
    get(address) {
        return fetch(this.url(address))
            .then((res) => res.json());
    }
}
exports.AddressTotalSent = AddressTotalSent;
class AddressUnconfirmedBalance extends ApiMode_1.WithApiMode {
    url(address) {
        return `${this.apiUrl}/addr/${address}/unconfirmedBalance`;
    }
    get(address) {
        return fetch(this.url(address))
            .then((res) => res.json());
    }
}
exports.AddressUnconfirmedBalance = AddressUnconfirmedBalance;
class AddressUtxo extends ApiMode_1.WithApiMode {
    url(address) {
        return Array.isArray(address)
            ? `${this.apiUrl}/addrs/${address.join(',')}/utxo`
            : address
                ? `${this.apiUrl}/addrs/${address}/utxo`
                : `${this.apiUrl}/addrs/utxo`;
    }
    get(address) {
        return fetch(this.url(address))
            .then((res) => res.json());
    }
    post(address) {
        return fetch(this.url(), {
            method: 'POST',
            body: {
                addrs: Array.isArray(address) ? address : [address]
            }
        }).then((res) => res.json());
    }
}
exports.AddressUtxo = AddressUtxo;
class AddressTransactions extends ApiMode_1.WithApiMode {
    get path() {
        return this.apiUrl + '/addrs';
    }
    url(address, from, to) {
        return UrlObject_1.urlObjectToUrl({
            url: Array.isArray(address)
                ? `${this.path}/${address.join(',')}/txs`
                : address
                    ? `${this.path}/${address}/txs`
                    : `${this.path}/txs`,
            query: {
                from, to
            }
        });
    }
    get(address, from, to) {
        return fetch(this.url(address, from, to))
            .then((res) => res.json());
    }
    post(address, params) {
        return fetch(this.url(), {
            method: 'POST',
            body: Object.assign({ addrs: Array.isArray(address) ? address : [address] }, (params || {}))
        }).then((res) => res.json());
    }
}
exports.AddressTransactions = AddressTransactions;
