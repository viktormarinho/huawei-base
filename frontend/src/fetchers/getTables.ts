import axios from 'axios';
import { Table } from '../components/panel/DataBase';
import { apiUrl } from './apiUlr';

export async function fetchAllTables(): Promise<{ error?: any, msg?: string, tables: Table[] }> {
    const { data } = await axios.get(apiUrl + '/tables/admin/get-tables');

    return data
}