import axios from 'axios';
import { apiUrl } from './apiUlr';

export async function fetchAllCloudFunctions(): Promise<{ error?: any, msg?: string, functions: any[] }> {
    const { data } = await axios.get(apiUrl + '/functions/admin/get-functions');

    return data
}