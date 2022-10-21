"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHuaweiBase = void 0;
const helper_1 = require("./helper");
const axios_1 = __importDefault(require("axios"));
const getHuaweiBase = (connectionUrl) => new HuaweiBaseClient(connectionUrl);
exports.getHuaweiBase = getHuaweiBase;
class HuaweiBaseClient {
    constructor(url) {
        this.url = url;
    }
    invoke(endpoint, body, method, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.url}${endpoint}`;
            const defaultHeaders = {
                "Content-Type": "application/json",
            };
            const config = {
                headers: headers || defaultHeaders,
                method: method || "GET",
                data: body || {},
                url: url
            };
            const { data } = yield (0, axios_1.default)(config);
            return data;
        });
    }
    table(name) {
        return new TableMethods(name, this.url);
    }
    storage() {
        return new StorageMethods(this.url);
    }
    function(name) {
        return new FunctionsMethods(name, this.url);
    }
}
class TableMethods extends HuaweiBaseClient {
    constructor(name, url) {
        super(url);
        this.name = name;
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.invoke(`/tables/list-table/${this.name}`);
            if (response.error) {
                throw new Error(response.msg);
            }
            return response.rows;
        });
    }
    find(matchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.invoke(`/tables/get-table/${this.name}`, helper_1.Helper.convertToMatchQuery(matchQuery));
            if (response.error) {
                throw new Error(response.msg);
            }
            return response.rows;
        });
    }
    findOne(matchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.invoke(`/tables/get-table/${this.name}`, helper_1.Helper.convertToMatchQuery(matchQuery));
            if (response.error) {
                throw new Error(response.msg);
            }
            return response.rows[0];
        });
    }
    insert(insertData) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.invoke(`/tables/insert-table/${this.name}`, insertData, "POST");
            if (response.error) {
                throw new Error(response.msg);
            }
            return response;
        });
    }
    delete(matchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.invoke(`/tables/delete-table/${this.name}`, helper_1.Helper.convertToMatchQuery(matchQuery), "DELETE");
            if (response.error) {
                throw new Error(response.msg);
            }
            return response;
        });
    }
    update(updateData, matchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.invoke(`/tables/update-table/${this.name}`, { updateData, matchQuery: helper_1.Helper.convertToMatchQuery(matchQuery) }, "PATCH");
            if (response.error) {
                throw new Error(response.msg);
            }
            return response;
        });
    }
}
class StorageMethods extends HuaweiBaseClient {
    constructor(url) {
        super(url);
    }
    upload(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('upload', file);
            const response = yield this.invoke('/storage/upload', formData, 'POST', { "Content-Type": "multipart/form-data" });
            if (response.error) {
                throw new Error(response.msg);
            }
            return response;
        });
    }
}
class FunctionsMethods extends HuaweiBaseClient {
    constructor(name, url) {
        super(url);
        this.name = name;
    }
    call(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.invoke('/functions/call-function', { name: this.name, args: args }, 'POST');
            if (response.error) {
                throw new Error(response.msg);
            }
            return response;
        });
    }
}
