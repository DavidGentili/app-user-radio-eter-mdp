import { instance } from "./config";

export async function getHighlightedPrograms(){
    return await instance.get('/programs?highlighted=true');
}