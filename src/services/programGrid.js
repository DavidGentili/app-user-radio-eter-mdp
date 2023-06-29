import { instance } from "./config";

export async function getProgramGrid(){
    const grid = await instance.get('/programgrid');
    return grid
}

export async function getCurrentProgram(){
    return await instance.get('/currentprogram');
}