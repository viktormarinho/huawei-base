"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
class Base {
    constructor(config) {
        this.url = config.url;
    }
    invoke(endpoint, options) {
        const url = `${this.url}${endpoint}`;
        const headers = {
            "Content-Type": "application/json",
        };
        const config = Object.assign(Object.assign({}, options), { headers });
        return fetch(url, config).then(res => {
            if (res.ok) {
                return res.json();
            }
            else {
                throw new Error(res.statusText);
            }
        });
    }
}
exports.Base = Base;
