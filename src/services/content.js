import { instance } from "./config";


export async function getPlaformContentByname(name) {
    const { data } = await instance.get(`/platform-content/name/${name}`);
    return data.contents;
}