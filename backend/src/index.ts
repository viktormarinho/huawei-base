import express from "express";
import bodyParser from 'body-parser';
import sqlite3 from "sqlite3";

type Field = {
    name: string
    type: string
    maxLength?: number
}

type TableOptions = {
    name: string
    fields: Field[]
}

const app = express();
const db = new sqlite3.Database('bimbos.sqlite');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/create-table', (req, res) => {
    const { name, fields }: TableOptions = req.body;

    db.serialize(() => {
        db.run(
            `CREATE TABLE ${name} (${fields.map((field) => (
                `${field.name} ${field.type}` +
                `${field.maxLength ? `(${field.maxLength})` : ''},`
            )
            ).join('').slice(0, -1)})`
        )
    })

    res.json({ msg: 'Created table successfully.' })
})

async function run() {
    app.listen({ port: 3000 });
}

run().catch(console.error)