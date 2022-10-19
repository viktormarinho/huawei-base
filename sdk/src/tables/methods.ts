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

    getOne(column: string, value: string): Promise<any> {
        return this.invoke(`${this.url}/get-one/${this.name}`)
    }
}