"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isUrlObject(a) {
    return !!a.url;
}
exports.isUrlObject = isUrlObject;
function urlObjectQueryParams(urlObject) {
    return urlObject.query
        ? Object.keys(urlObject.query).filter(key => urlObject.query[key]).map(key => `${key}=${urlObject.query[key]}`).join('&')
        : '';
}
exports.urlObjectQueryParams = urlObjectQueryParams;
function urlObjectToUrl(urlObject) {
    const queryParams = urlObjectQueryParams(urlObject);
    return urlObject.url + '?' + queryParams;
}
exports.urlObjectToUrl = urlObjectToUrl;
