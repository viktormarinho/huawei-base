export class Helper {
    static convertToMatchQuery(data: any) {
        for (const k in data) {
            return {
                "column": k,
                "value": data[k]
            }
        }
    }
}
