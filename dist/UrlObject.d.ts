export interface UrlObject {
    readonly url: string;
    readonly query?: UrlObjectQuery;
}
export interface UrlObjectQuery {
    readonly [index: string]: string | number;
}
export declare function isUrlObject(a: any): a is UrlObject;
export declare function urlObjectQueryParams(urlObject: UrlObject): string;
export declare function urlObjectToUrl(urlObject: UrlObject): string;
