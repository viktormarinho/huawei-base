import axios from "axios";
import { apiUrl, headers } from "./apiUlr";


export async function insertRow({ table, rowData }: { table: string, rowData: any }) {
    const { data } = await axios.post(apiUrl + '/tables/insert-table/' + table, rowData, { headers });

    if (data.error) {
        throw new Error(data.msg)
    }

    return data;
}