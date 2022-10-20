import { MatchQuery, TableOptions, TableParams, TablePatchType } from '../../types/Tables';
import { Db } from './../config';
import express from 'express';
import { resolveBackticks, toSqlValues } from '../utils/sqlParsing';
import { withColumnList } from '../utils/columnListCallback';

const router = express.Router();

router.get('/admin/get-tables', (req, res) => {
    Db.serialize(() => {
        Db.all(
            `SELECT * FROM __tables`,
            function (error, tables) {
                if (error) {
                    return res.json({ error, msg: error.message })
                }

                res.json({ tables: tables.map(t => ({ name: t.name, columns: [{ name: 'id', type: 'number' }, ...JSON.parse(t.columns)] })) })
            }
        )
    })
})

router.post('/admin/create-table', (req, res) => {
    const { name, fields }: TableOptions = req.body;

    Db.serialize(() => {
        Db.run(
            `CREATE TABLE ${name} (id INTEGER PRIMARY KEY AUTOINCREMENT,${fields.map((field) => (
                `${field.name} ${field.type}` +
                `${field.maxLength ? `(${field.maxLength})` : ''},`
            )
            ).join('').slice(0, -1)})`,
            function (error) {
                if (error) {
                    return res.json({ error, msg: error.message });
                }

                res.json({ msg: "Created table successfully. " });
            }
        ).run(
            `INSERT INTO __tables (name, columns) VALUES ('${name}', '${JSON.stringify(fields)}')`,
            function (error) {
                if (error) {
                    console.log({ error, msg: error.message })
                }
            }
        )
    })

})

router.delete('/admin/delete-table/:table', (req, res) => {
    const { table }: TableParams = req.params;

    Db.serialize(() => {
        Db.run(
            `DROP TABLE ${table}`,
            function (error) {
                if (error) {
                    return res.json({ error, msg: error.message });
                }

                Db.serialize(() => {
                    Db.run(
                        `DELETE FROM __tables WHERE name = ?;`,
                        table,
                        function (error) {
                            if (error) {
                                return res.json({ error, msg: error.message });
                            }

                            res.json({ msg: "Deleted table successfully. " })
                        }
                    )
                })
            }
        )
    })
})


router.get('/list-table/:table', (req, res) => {
    const { table }: TableParams = req.params;

    Db.serialize(() => {
        Db.all(
            `SELECT * FROM ${table}`,
            function (error, rows) {
                if (error) {
                    return res.json({ error, msg: error.message })
                }

                return res.json({ rows })
            }
        )
    })
})

router.get('/get-table/:table', (req, res) => {
    const { table }: TableParams = req.params;
    const { column, value }: MatchQuery = req.body;

    Db.serialize(() => {
        Db.all(
            `SELECT * FROM ${table} WHERE ${column} = ?`,
            value,
            function (error, rows) {
                if (error) {
                    return res.json({ error, msg: error.message })
                }

                return res.json({ rows })
            }
        )
    })
})

router.post('/insert-table/:table', (req, res) => {
    const { table }: TableParams = req.params;
    const insertRow = req.body;

    withColumnList(table, res, (colList) => {
        for (const col in insertRow) {
            if (!colList.map(c => c.name).includes(col)) {
                return res.json({ error: 'Column not existent', msg: `Column ${col} does not exist on table ${table}. Existing columns: ${colList.map(c => c.name)}` })
            }
        }
        const { columns, sqlValues } = toSqlValues(insertRow)

        Db.serialize(() => {
            Db.run(
                `INSERT INTO ${table} (${columns}) VALUES (${sqlValues})`,
                function (error) {
                    if (error) {
                        return res.json({ error, msg: error.message })
                    }

                    return res.json({ msg: 'Row inserted successfully.' })
                }
            )
        })
    })
})

router.patch('/update-table/:table', (req, res) => {
    const { table }: TableParams = req.params;
    const { updateData, matchQuery }: TablePatchType = req.body;

    withColumnList(table, res, (columns) => {
        for (const key in updateData) {
            if (!columns.map(c => c.name).includes(key) && key !== 'id') {
                return res.json({ error: 'Column not existent', msg: `Column ${key} does not exist on table ${table}. Existing columns: ${columns.map(c => c.name)}` })
            }
        }

        Db.serialize(() => {
            Db.all(
                `SELECT * FROM ${table} WHERE ${matchQuery.column} = ${resolveBackticks(matchQuery.value)}`,
                function (error, rows) {
                    if (error) {
                        return res.json({ error, msg: error.message });
                    }

                    const ids = rows.map(r => r.id);
                    const rowsToUpdate = rows.length;

                    ids.forEach((id) => {
                        for (const col in updateData) {
                            const val = typeof updateData[col] == 'string' ? `'${updateData[col]}'` : updateData[col];

                            Db.serialize(() => {
                                Db.run(
                                    `UPDATE ${table} SET ${col} = ${val} WHERE id = ${id};`,
                                    function (error) {
                                        if (error) {
                                            return res.json({ error, msg: error.message });
                                        }
                                    }
                                )
                            })
                        }
                    })

                    return res.json({ msg: 'Updated all rows successfully.', rowsUpdated: rowsToUpdate });
                }
            )
        })
    })

})

router.delete('/delete-table/:table', (req, res) => {
    const { table }: TableParams = req.params;
    const { column, value }: MatchQuery = req.body;

    withColumnList(table, res, (columns) => {
        if (!columns.map(c => c.name).includes(column) && column !== 'id') {
            return res.json({ error: 'Column not existent', msg: `Column ${column} does not exist on table ${table}. Existing columns: ${columns.map(c => c.name)}` })
        }

        Db.serialize(() => {
            Db.all(
                `SELECT * FROM ${table} WHERE ${column} = ${resolveBackticks(value)};`,
                function (error, rows) {
                    if (error) {
                        return res.json({ error, msg: error.message });
                    }
                    const rowsToDelete = rows.length;

                    Db.serialize(() => {
                        Db.run(
                            `DELETE FROM ${table} WHERE ${column} = ${resolveBackticks(value)};`,
                            function (error) {
                                console.dir(error)
                                if (error) {
                                    return res.json({ error, msg: error.message });
                                }

                                res.json({ msg: 'Deleted all rows successfully', rowsDeleted: rowsToDelete });
                            }
                        )
                    })
                }
            )
        })
    })
})


export default router;