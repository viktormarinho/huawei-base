import { HuaweiBaseClient } from "./index"
import { Helper } from "./helper"
export class Methods extends HuaweiBaseClient {
    private name: string
    constructor(name: string, url: string) {
        super(url)
        this.name = name
    }

    async list(): Promise<any> {
        return await this.invoke(`${this.url}/list-all/${this.name}`)
    }

    async find(data: any): Promise<any> {
        return await this.invoke(`${this.url}/get-one/${this.name}`, Helper.convertToMatchQuery(data))
    }

    async findOne(data: any): Promise<any> {
        const query = await this.invoke(`${this.url}/get-one/${this.name}`, Helper.convertToMatchQuery(data))
        return query[0]
    }

    async delete(data: any): Promise<any> {
        return await this.invoke(`${this.url}/delete/${this.name}`, Helper.convertToMatchQuery(data), "DELETE")
    }

    deleteColumn(data: any): Promise<any> {
        return this.invoke(`${this.url}/delete-column/${this.name}`, Helper.convertToMatchQuery(data), "DELETE")
    }
}