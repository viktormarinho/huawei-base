export declare const getHuaweiBase: (connectionUrl: string) => HuaweiBaseClient;
declare class HuaweiBaseClient {
    url: string;
    constructor(url: string);
    protected invoke(endpoint: string, body?: any, method?: string, headers?: any): Promise<any>;
    table<T>(name: string): TableMethods<T>;
    storage(): StorageMethods;
    function(name: string): FunctionsMethods;
}
declare class TableMethods<T> extends HuaweiBaseClient {
    private name;
    constructor(name: string, url: string);
    list(): Promise<T[]>;
    find(matchQuery: Partial<T>): Promise<T[]>;
    findOne(matchQuery: Partial<T>): Promise<T>;
    insert(insertData: T): Promise<any>;
    delete(matchQuery: Partial<T>): Promise<any>;
    update(updateData: Partial<T>, matchQuery: Partial<T>): Promise<any>;
}
declare class StorageMethods extends HuaweiBaseClient {
    constructor(url: string);
    upload(file: File): Promise<any>;
}
declare class FunctionsMethods extends HuaweiBaseClient {
    private name;
    constructor(name: string, url: string);
    call(args: any): Promise<any>;
}
export {};
