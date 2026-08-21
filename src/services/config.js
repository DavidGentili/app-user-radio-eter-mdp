import axios from 'axios';

// export const urlBase = 'https://api-radio-eter-mdp.herokuapp.com';
// const urlBase = 'https://api-radio-eter-mdp.onrender.com'
const urlBase = import.meta.env.VITE_API_URL || 'http://localhost:9000';

export const instance = axios.create({
    baseURL: urlBase,
});


