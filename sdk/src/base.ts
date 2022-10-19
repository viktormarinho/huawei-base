type Config = {
    baseUrl: string
}

export abstract class Base {
    private baseUrl: string
    constructor(config: Config) {
        this.baseUrl = config.baseUrl
    }

    protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`

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