"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
const Address_1 = require("./Address");
const Status_1 = require("./Status");
const BlockClient_1 = require("./BlockClient");
const Transactions_1 = require("./Transactions");
const ClientBase_1 = require("./ClientBase");
class InsightClient extends ClientBase_1.ClientBase {
    constructor(apiMode, fetch) {
        super(apiMode, fetch);
        this.Address = new Address_1.Address(apiMode);
        this.Block = new BlockClient_1.Block(apiMode);
        this.Blocks = new BlockClient_1.Blocks(apiMode);
        this.BlockIndex = new BlockClient_1.BlockIndex(apiMode);
        this.RawBlock = new BlockClient_1.RawBlock(apiMode);
        this.Transactions = new Transactions_1.Transactions(apiMode, fetch);
        this.Utils = new Status_1.Utils(apiMode);
    }
}
exports.InsightClient = InsightClient;
