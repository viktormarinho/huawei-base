"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Methods = void 0;
const index_1 = require("./index");
class Methods extends index_1.HuaweiBaseClient {
    constructor(name, url) {
        super(url);
        this.name = name;
    }
    list() {
        return this.invoke(`${this.url}/list-all/${this.name}`);
    }
    find(data) {
        const values = Object.keys(data).find((key) => {
            const values = {
                key: key,
                value: data[key]
            };
            return values;
        });
        return this.invoke(`${this.url}/get-one/${this.name}`, values);
    }
    findOne(column, value) {
        return this.invoke(`${this.url}/get-one/${this.name}`, { column, value });
    }
    delete(column, value) {
        return this.invoke(`${this.url}/delete/${this.name}`, { column, value }, "DELETE");
    }
    deleteColumn(column, value) {
        return this.invoke(`${this.url}/delete-column/${this.name}/column:${column}?value:${value}`);
    }
}
exports.Methods = Methods;
