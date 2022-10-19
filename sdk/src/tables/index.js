"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuaweiBaseClient = void 0;
const methods_1 = require("./methods");
class HuaweiBaseClient {
    constructor(url) {
        this.url = url;
    }
    invoke(endpoint, body, method) {
        const url = `${this.url}${endpoint}`;
        const headers = {
            "Content-Type": "application/json",
        };
        const config = {
            headers: headers,
            method: method || "GET",
            body: JSON.stringify(body || {})
        };
        return fetch(url, config).then(res => {
            if (res.ok) {
                return res.json();
            }
            else {
                throw new Error(res.statusText);
            }
        });
    }
    table(name) {
        return new methods_1.Methods(name, this.url);
    }
}
exports.HuaweiBaseClient = HuaweiBaseClient;
