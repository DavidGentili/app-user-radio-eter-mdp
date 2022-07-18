import axios from 'axios';

export const urlBase = 'https://api-radio-eter-mdp.herokuapp.com';
// const urlBase = 'http://localhost:9000';

export const instance = axios.create({
    baseURL: urlBase,
});

