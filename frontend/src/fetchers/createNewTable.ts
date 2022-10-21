import { Table } from "../components/panel/DataBase";
import axios from 'axios';
import { apiUrl } from "./apiUlr";

export async function createTable(table: Table): Promise<{ error?: any, msg?: any }> {
    const { data } = await axios.post(apiUrl + '/tables/admin/create-table', { name: table.name, fields: table.columns })

    return data;
}