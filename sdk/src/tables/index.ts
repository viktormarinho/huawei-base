import { Methods } from "./methods";

export abstract class HuaweiBaseClient {
    protected url: string
    constructor(url: string) {
        this.url = url
    }

    protected invoke(endpoint: string, body?: any, method?: string): Promise<any> {
        const url = `${this.url}${endpoint}`

        const headers = {
            "Content-Type": "application/json",
        }

        const config: RequestInit = {
            headers: headers,
            method: method || "GET",
            body: JSON.stringify(body || {})
        }

        return fetch(url, config).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(res.statusText)
            }
        })
    }

    table(name: string) {
        return new Methods(name, this.url)
    }
}