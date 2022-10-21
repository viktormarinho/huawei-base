import axios from "axios";
import { Field } from "../components/panel/DataBase";


export async function fetchTableRows({ queryKey }: any): Promise<{ error?: any, msg?: any, rows: Field[] }> {
    const [_, tableName] = queryKey;
    const { data } = await axios.get('http://localhost:3000/tables/list-table/' + tableName);

    return data
}