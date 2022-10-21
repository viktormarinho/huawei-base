import axios from 'axios';

export async function fetchAllCloudFunctions(): Promise<{ error?: any, msg?: string, functions: any[] }> {
    const { data } = await axios.get('http://localhost:3000/functions/admin/get-functions');

    return data
}