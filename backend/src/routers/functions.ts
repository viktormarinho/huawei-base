import express from 'express';
import { CreateFunctionType } from '../../types/Functions';
import { Db } from '../config';
import { transpile } from 'typescript';
import { getHuaweiBase } from 'huaweibase';

const router = express.Router();

router.get('/admin/get-functions', (req, res) => {
    Db.serialize(() => {
        Db.all(
            `SELECT * FROM __functions`,
            function (error, rows) {
                if (error) {
                    return res.status(500).json({ error, msg: error.message })
                }

                res.json({ functions: rows })
            }
        )
    })
})

router.delete('/admin/delete-function', (req, res) => {
    const { name }: { name: string } = req.body;
    Db.serialize(() => {
        Db.run(
            `DELETE FROM __functions WHERE name = ?;`,
            name,
            function (error) {
                if (error) {
                    return res.status(400).json({ error, msg: error.message })
                }

                res.json({ msg: 'Function deleted with success.' })
            }
        )
    })
})

router.post('/create-function', (req, res) => {
    const { funcText, name }: CreateFunctionType = req.body;
    const transpiledFunc = transpile(`({ exec: ${funcText} })`);

    Db.serialize(() => {
        Db.run(
            `INSERT INTO __functions (name, func) VALUES (?, ?);`,
            [name, transpiledFunc],
            function (error) {
                if (error) {
                    return res.status(500).json({ error, msg: error.message });
                }

                res.json({ msg: 'Function created with success.' });
            }
        )
    })
})

router.post('/call-function', (req, res) => {
    const { name, args }: { name: string, args: any } = req.body;

    Db.serialize(() => {
        Db.get(
            `SELECT * FROM __functions WHERE name = ?;`,
            name,
            function (error, row) {
                if (error) {
                    return res.status(500).json({ error, msg: error.message })
                }

                if (!row) {
                    return res.status(400).json({ error: true, msg: 'Called function does not exist.' })
                }

                const func = eval(row.func);

                const client = getHuaweiBase(req.protocol + '://' + req.get('Host'));

                func.exec({ client, ...args }).then((data: any) => {
                    res.json({ data, msg: 'Executed successfully.' });
                })
            }
        )
    })
})

export default router;