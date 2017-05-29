"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiMode_1 = require("./ApiMode");
class ClientBase extends ApiMode_1.WithApiMode {
    constructor(apiMode, fetch) {
        super(apiMode);
        this.fetch = fetch;
    }
}
exports.ClientBase = ClientBase;
