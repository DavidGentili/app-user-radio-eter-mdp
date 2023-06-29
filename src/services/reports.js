import { instance } from './config';


export async function getReports(count) {
    try {
        const params = { active: true };
        if (count)
            params.count = count;
        const { data } = await instance.get('/report', { params });
        return data;
    } catch (e) {

    }
}

export async function getReportsWithoutId(id, count) {
    try {
        const params = { active: true, id, count };
        const { data } = await instance.get('/report/withoutId', { params });
        return data;
    } catch (e) {

    }
}

export async function getReportById(id) {
    try {
        const params = { active: true, id };
        const { data } = await instance.get('/report', { params });
        return (data && Array.isArray(data)) ? data[0] : null;
    } catch (e) {

    }
}