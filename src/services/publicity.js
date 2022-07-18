import { instance } from "./config";

export async function getOficialPublicities(){
    return instance.get('/ad?type=oficial')
    .then(({ data }) => {
        if(!Array.isArray(data) || data.length === 0)
            return undefined;
        return data;
        
    })
    .catch(e => {
        return undefined;
    })
}

export async function getStandardPublicities(){
    return instance.get('/ad?type=standard')
    .then(({ data }) => {
        if(!Array.isArray(data) || data.length === 0)
            return undefined;
        return data;
        
    })
    .catch(e => {
        return undefined;
    })
}