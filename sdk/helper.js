"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
class Helper {
    static convertToMatchQuery(data) {
        for (const k in data) {
            return {
                "column": k,
                "value": data[k]
            };
        }
    }
}
exports.Helper = Helper;
