"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
const ApiMode_1 = require("./ApiMode");
const UrlObject_1 = require("./UrlObject");
class Blocks extends ApiMode_1.WithApiMode {
    constructor(apiMode) {
        super(apiMode);
    }
    url(limit, date) {
        return UrlObject_1.urlObjectToUrl({
            url: `${this.apiUrl}/blocks`,
            query: {
                limit,
                date: date.toISOString()
            }
        });
    }
    get(limit, date) {
        return fetch(this.url(limit, date))
            .then((res) => res.json());
    }
}
exports.Blocks = Blocks;
class Block extends ApiMode_1.WithApiMode {
    constructor(apiMode) {
        super(apiMode);
    }
    url(hash) {
        return `${this.apiUrl}/block/${hash}`;
    }
    get(hash) {
        return fetch(this.url(hash))
            .then((res) => res.json());
    }
}
exports.Block = Block;
class BlockIndex extends ApiMode_1.WithApiMode {
    constructor(apiMode) {
        super(apiMode);
    }
    url(height) {
        return `${this.apiUrl}/block-index/${height}`;
    }
    get(height) {
        return fetch(this.url(height))
            .then((res) => res.json());
    }
}
exports.BlockIndex = BlockIndex;
class RawBlock extends ApiMode_1.WithApiMode {
    constructor(apiMode) {
        super(apiMode);
    }
    url(blockHashOrHeight) {
        return `${this.apiUrl}/rawblock/${blockHashOrHeight}`;
    }
    get(blockHashOrHeight) {
        return fetch(this.url(blockHashOrHeight))
            .then((res) => res.json());
    }
}
exports.RawBlock = RawBlock;
