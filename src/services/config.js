import axios from 'axios';

// export const urlBase = 'https://api-radio-eter-mdp.herokuapp.com';
const urlBase = 'https://api-radio-eter-mdp.onrender.com'
// const urlBase = 'http://localhost:9000';

export const instance = axios.create({
    baseURL: urlBase,
});

export const mediaPlayerUrl = 'https://videostream.shockmedia.com.ar:19360/radioetermdp/radioetermdp.m3u8';
// export const mediaPlayerUrl = 'https://59537faa0729a.streamlock.net:443/radioetermdp/radioetermdp/playlist.m3u8';


