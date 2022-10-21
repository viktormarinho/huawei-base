import { Table } from "../components/panel/DataBase";
import axios from 'axios';

export async function createTable(table: Table): Promise<{ error?: any, msg?: any }> {
    const { data } = await axios.post('http://localhost:3000/tables/admin/create-table', { name: table.name, fields: table.columns })

    return data;
}