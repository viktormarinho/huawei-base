import axios from "axios";
import { Field } from "../components/panel/DataBase";
import { apiUrl, headers } from "./apiUlr";


export async function fetchTableRows({ queryKey }: any): Promise<{ error?: any, msg?: any, rows: Field[] }> {
    const [_, tableName] = queryKey;
    const { data } = await axios.get(apiUrl + '/tables/list-table/' + tableName, { headers });

    return data
}