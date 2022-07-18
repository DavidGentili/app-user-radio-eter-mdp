import { instance } from "./config";

export async function getOficialPublicities(){
    return await getpublicities('oficial') 

}

export async function getStandardPublicities(){
    return await getpublicities('standard') 
}

const getpublicities = async (type) => {
    return instance.get(`/ad?type=${type}`)
    .then(({ data }) => {
        if(!Array.isArray(data) || data.length === 0)
            return [];
        return data;
        
    })
    .catch(e => {
        return [];
    })
}