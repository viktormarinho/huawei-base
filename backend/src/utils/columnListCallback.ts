import { Db } from "../config"
import { Response } from "express"
import { Column } from "../../types/Tables"

export const withColumnList = (table: string, res: Response, cb: (columns: Column[]) => any) => {
    Db.serialize(() => {
        Db.get(
            `SELECT * FROM __tables WHERE name = '${table}';`,
            function (error, row) {
                if (error) {
                    return res.json({ error, msg: error.message })
                }

                const columns: Column[] = JSON.parse(row.columns);

                cb(columns);
            }
        )
    })
}