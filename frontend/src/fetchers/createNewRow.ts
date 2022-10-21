import axios from "axios";
import { apiUrl } from "./apiUlr";


export async function insertRow({ table, rowData }: { table: string, rowData: any }) {
    const { data } = await axios.post(apiUrl + '/tables/insert-table/' + table, rowData);

    if (data.error) {
        throw new Error(data.msg)
    }

    return data;
}