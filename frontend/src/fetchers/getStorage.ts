import axios from "axios";
import { apiUrl, headers } from "./apiUlr";

export async function getUploads() {
    const { data } = await axios.get(apiUrl + '/storage/admin/get-uploads', { headers });

    return data;
}