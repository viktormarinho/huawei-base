import axios from 'axios';
import { apiUrl, headers } from './apiUlr';

export async function fetchAllCloudFunctions(): Promise<{ error?: any, msg?: string, functions: any[] }> {
    const { data } = await axios.get(apiUrl + '/functions/admin/get-functions', { headers });

    return data
}