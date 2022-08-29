import { instance } from "./config";

export async function getProgramGrid(){
    return await instance.get('/programgrid');
}

export async function getCurrentProgram(){
    return await instance.get('/currentprogram');
}