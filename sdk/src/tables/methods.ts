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

    async find(matchQuery: any): Promise<any> {
        return await this.invoke(`${this.url}/get-one/${this.name}`, Helper.convertToMatchQuery(matchQuery))
    }

    async findOne(matchQuery: any): Promise<any> {
        const query = await this.invoke(`${this.url}/get-one/${this.name}`, Helper.convertToMatchQuery(matchQuery))
        return query[0]
    }

    delete(matchQuery: any): Promise<any> {
        return this.invoke(`${this.url}/delete-column/${this.name}`, Helper.convertToMatchQuery(matchQuery), "DELETE")
    }

    update(updateData: any, matchQuery: any): Promise<any> {
        return this.invoke(`${this.url}/delete-column/${this.name}`, [updateData, Helper.convertToMatchQuery(matchQuery)], "PATCH")
    }
}