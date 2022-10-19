import { Methods } from "./methods";

export abstract class HuaweiBaseClient {
    protected url: string
    constructor(url: string) {
        this.url = url
    }

    protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.url}${endpoint}`

        const headers = {
            "Content-Type": "application/json",
        }

        const config = {
            ...options,
            headers
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