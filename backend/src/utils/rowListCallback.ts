import { Db } from "../config"
import { Response } from "express"

export const withRowList = (table: string, res: Response, cb: (rowlist: string[]) => any) => {
    Db.serialize(() => {
        Db.get(
            `SELECT * FROM __tables WHERE name = '${table}';`,
            function (error, row) {
                if (error) {
                    return res.json({ error, msg: error.message })
                }

                const rowlist: string[] = JSON.parse(row.rowlist);

                cb(rowlist);
            }
        )
    })
}