import minimist from 'minimist';
import fs from 'fs';
import axios from 'axios';
import { baseFunction } from './baseFunction';

const args = minimist(process.argv.slice(2));
const funcs = {
    'functions': {
        'create': {
            run(args: minimist.ParsedArgs) {
                const functionName = args._[2];

                if (!functionName) {
                    console.log('Please provide a function name.');
                    return console.log('Example: huaweibase functions create hello');
                }

                try {
                    fs.mkdir('./cloud-functions/', (err) => {
                        if (err)
                            return console.log(err);
                    })
                } catch (error: any) {
                    if (error.code !== 'EEXIST') {
                        return console.log(error)
                    }
                }

                const functionText = baseFunction(functionName);

                const writeStream = fs.createWriteStream(`./cloud-functions/${functionName}.ts`);
                writeStream.write(functionText);
            }
        },
        'deploy': {
            run(args: minimist.ParsedArgs) {
                const name = args._[2];
                const projectUrl = args.project;

                if (!name || !projectUrl) {
                    console.log('Please provide a function name and a project deploy url. (You can get this one at your project functions admin panel)');
                    return console.log('Example: huaweibase functions deploy hello --project https://124.43.61.39:3000');
                }

                try {
                    let funcText = fs.readFileSync(`./cloud-functions/${name}.ts`).toString();

                    const identifier = 'async function ' + name;

                    funcText = (identifier + funcText.split(identifier)[1]).replace('Args', 'any');

                    (async function () {
                        try {
                            const { data } = await axios.post(`${projectUrl}/functions/create-function`, { name, funcText });

                            if (data.error) {
                                return console.log('An error occurred while trying to deploy your function. Make sure the project url is correct.', data.error);
                            }

                            console.log('Function deployed with success.')
                        } catch (error) {
                            console.log('An error occurred while trying to deploy your function. Make sure the project url is correct.', error);
                        }
                    })()
                } catch (error: any) {
                    if (error.code === 'ENOENT') {
                        return console.log(`No function named ${name} found at the './cloud-functions' directory. \nMake sure you run all the huaweibase cli commands from the root directory of your project.`)
                    }
                    return console.log(error)
                }
            }
        }
    }
}



async function run(args: minimist.ParsedArgs) {
    const func = args._[0];

    if (!Object.keys(funcs).includes(func)) {
        console.log(`Unknown first argument: ${func}`)
        return console.log('Known first arguments: ', Object.keys(funcs))
    }

    const commands = funcs[func as keyof typeof funcs];
    const command = args._[1];

    if (!Object.keys(commands).includes(command)) {
        console.log(`Unknown command: ${func}`)
        return console.log(`Known commands for "${func}": ${Object.keys(commands)}`)
    }

    const action = commands[command as keyof typeof commands];

    action.run(args)
}

run(args).catch(err => console.log(err))