export const baseFunction = (functionName: string) => `import { HuaweiBaseClient } from 'huawei-base';
// For now, only type definitions and imports are allowed outside of cloud functions.
// You can build everything you want like new functions inside the main async function below. 
// Also, you may include every args that you want to receive via the args object, otherwise there may happen unexpected errors.

type Args = {
    client: HuaweiBaseClient
}

async function ${functionName}(args: Args) {
    return { msg: 'Hello from cloud functions' }
}
`