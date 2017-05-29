"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
const ApiMode_1 = require("./ApiMode");
const AddressClient_1 = require("./AddressClient");
const Status_1 = require("./Status");
const BlockClient_1 = require("./BlockClient");
class Client extends ApiMode_1.WithApiMode {
    constructor(apiMode) {
        super(apiMode);
        this.Address = new AddressClient_1.Address(apiMode);
        this.Block = new BlockClient_1.Block(apiMode);
        this.Blocks = new BlockClient_1.Blocks(apiMode);
        this.BlockIndex = new BlockClient_1.BlockIndex(apiMode);
        this.RawBlock = new BlockClient_1.RawBlock(apiMode);
        this.Utils = new Status_1.Utils(apiMode);
    }
}
exports.Client = Client;
