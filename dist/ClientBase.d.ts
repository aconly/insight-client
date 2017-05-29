import { ApiMode, WithApiMode } from './ApiMode';
export declare class ClientBase extends WithApiMode {
    readonly fetch: any;
    constructor(apiMode: ApiMode, fetch: any);
}
