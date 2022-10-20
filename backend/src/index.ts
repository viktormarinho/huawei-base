import bodyParser from 'body-parser';
import express from 'express';
import { Db } from './config';
import tablesRouter from './routers/tables';
import storageRouter from './routers/storage';
import functionsRouter from './routers/functions';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/tables', tablesRouter);
app.use('/storage', storageRouter);
app.use('/functions', functionsRouter);

Db.serialize(() => {
    Db.run(
        `CREATE TABLE IF NOT EXISTS __tables (
            name TEXT,
            columns TEXT
        )`
    )
})

Db.serialize(() => {
    Db.run(
        `CREATE TABLE IF NOT EXISTS __functions (
            name TEXT,
            func TEXT
        )`
    )
})

async function run() {
    app.listen({ port: 3000 });
}

run().catch(console.error)