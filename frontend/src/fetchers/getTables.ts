import axios from 'axios';
import { Table } from '../components/panel/DataBase';

export async function fetchAllTables(): Promise<{ error?: any, msg?: string, tables: Table[] }> {
    const { data } = await axios.get('http://localhost:3000/tables/admin/get-tables');

    return data
}