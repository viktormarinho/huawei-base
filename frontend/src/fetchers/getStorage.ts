import axios from "axios";
import { apiUrl } from "./apiUlr";

export async function getUploads() {
    const { data } = await axios.get(apiUrl + '/storage/admin/get-uploads');

    return data;
}