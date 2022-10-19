type Config = {
    url: string
}

export abstract class Base {
    private url: string
    constructor(config: Config) {
        this.url = config.url
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
}