import axios from "axios";

export async function getUploads() {
    const { data } = await axios.get('http://localhost:3000/storage/admin/get-uploads');

    return data;
}