import { Helper } from "./helper"
import axios from 'axios';

export const getHuaweiBase = (connectionUrl: string) => new HuaweiBaseClient(connectionUrl);

class HuaweiBaseClient {
    public url: string
    constructor(url: string) {
        this.url = url
    }

    protected async invoke(endpoint: string, body?: any, method?: string, headers?: any): Promise<any> {
        const url = `${this.url}${endpoint}`

        const defaultHeaders = {
            "Content-Type": "application/json",
        }

        const config = {
            headers: headers || defaultHeaders,
            method: method || "GET",
            data: body || {},
            url: url
        }

        const { data } = await axios(config);

        return data;
    }

    table<T>(name: string) {
        return new TableMethods<T>(name, this.url)
    }

    storage() {
        return new StorageMethods(this.url);
    }

    function(name: string) {
        return new FunctionsMethods(name, this.url);
    }
}

class TableMethods<T> extends HuaweiBaseClient {

    private name: string
    constructor(name: string, url: string) {
        super(url)
        this.name = name
    }

    async list(): Promise<T[]> {
        const response = await this.invoke(`/tables/list-table/${this.name}`)

        if (response.error) {
            throw new Error(response.msg)
        }

        return response.rows
    }

    async find(matchQuery: Partial<T>): Promise<T[]> {
        const response = await this.invoke(`/tables/get-table/${this.name}`, Helper.convertToMatchQuery(matchQuery))

        if (response.error) {
            throw new Error(response.msg)
        }

        return response.rows
    }

    async findOne(matchQuery: Partial<T>): Promise<T> {
        const response = await this.invoke(`/tables/get-table/${this.name}`, Helper.convertToMatchQuery(matchQuery))

        if (response.error) {
            throw new Error(response.msg)
        }

        return response.rows[0]
    }

    async insert(insertData: T): Promise<any> {
        const response = await this.invoke(`/tables/insert-table/${this.name}`, insertData, "POST")

        if (response.error) {
            throw new Error(response.msg)
        }

        return response
    }

    async delete(matchQuery: Partial<T>): Promise<any> {
        const response = await this.invoke(`/tables/delete-table/${this.name}`, Helper.convertToMatchQuery(matchQuery), "DELETE")

        if (response.error) {
            throw new Error(response.msg)
        }

        return response
    }

    async update(updateData: Partial<T>, matchQuery: Partial<T>): Promise<any> {
        const response = await this.invoke(`/tables/update-table/${this.name}`, { updateData, matchQuery: Helper.convertToMatchQuery(matchQuery) }, "PATCH")

        if (response.error) {
            throw new Error(response.msg)
        }

        return response
    }
}

class StorageMethods extends HuaweiBaseClient {

    constructor(url: string) {
        super(url);
    }

    async upload(file: File) {
        const formData = new FormData();
        formData.append('upload', file);
        const response = await this.invoke('/storage/upload', formData, 'POST', { "Content-Type": "multipart/form-data" })

        if (response.error) {
            throw new Error(response.msg);
        }

        return response
    }
}

class FunctionsMethods extends HuaweiBaseClient {
    private name: string;
    constructor(name: string, url: string) {
        super(url);
        this.name = name;
    }

    async call(args: any) {
        const response = await this.invoke('/functions/call-function', { name: this.name, args: args }, 'POST');

        if (response.error) {
            throw new Error(response.msg);
        }

        return response
    }
}