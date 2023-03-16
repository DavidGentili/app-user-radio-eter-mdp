import { instance } from './config';


export async function getReports(id) {
    try {
        const params = {active : true};
        if (id)
            params.id = id
        const { data } = await instance.get('/report', { params });
        return data.slice(0,3);
    } catch (e) {

    }
}