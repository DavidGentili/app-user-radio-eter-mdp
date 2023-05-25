import { instance } from "./config";

export async function getPodcast() {
    try {

        const { data } = await instance.get('/podcast');
        return data;
    } catch (e) {

    }
}

export async function getLatestEpisodes(size = 3) {
    try {
        const { data } = await instance.get(`/episodes/withPodcast/latest?size=${size}`);
        return data;
    } catch (e) {

    }
}