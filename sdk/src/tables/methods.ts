import { HuaweiBaseClient } from "./index"

export class Methods extends HuaweiBaseClient {
    private name: string
    constructor(name: string, url: string) {
        super(url)
        this.name = name
    }

    list(): Promise<any> {
        return this.invoke(`${this.url}/list-all/${this.name}`)
    }

    find(data: any): Promise<any> {

        function convertToMatchQuery(obg: any) {
            for (const k in data) {
                return {
                    "column": k,
                    "value": data[k]
                }
            }
        }

        return this.invoke(`${this.url}/get-one/${this.name}`, convertToMatchQuery)
    }

    findOne(column: string, value: string): Promise<any> {
        return this.invoke(`${this.url}/get-one/${this.name}`, { column, value })
    }

    delete(column: string, value: string): Promise<any> {
        return this.invoke(`${this.url}/delete/${this.name}`, { column, value }, "DELETE")
    }

    deleteColumn(column: string, value: string): Promise<any> {
        return this.invoke(`${this.url}/delete-column/${this.name}/column:${column}?value:${value}`)
    }
}