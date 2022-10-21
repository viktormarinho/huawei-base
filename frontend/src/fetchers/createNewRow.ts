import axios from "axios";


export async function insertRow({ table, rowData }: { table: string, rowData: any }) {
    const { data } = await axios.post('http://localhost:3000/tables/insert-table/' + table, rowData);

    if (data.error) {
        throw new Error(data.msg)
    }

    return data;
}