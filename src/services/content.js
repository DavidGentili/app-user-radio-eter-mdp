import { instance } from "./config";


export async function getPlaformContentByname(name) {
    const { data } = await instance.get(`/platform-content/name/${name}`);
    return data.contents;
}

export async function getPlatformContentByCode(code) {
    const { data } = await instance.get(`/platform-content/code/${code}`);
    return data.contents;
}