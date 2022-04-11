import axios from 'axios';

import softCloud from '../../assets/weather/01.png';
import sunCloud from '../../assets/weather/02.png';
import strongCloud from '../../assets/weather/03.png';
import sun from '../../assets/weather/04.png';
import rain from '../../assets/weather/05.png';
import storm from '../../assets/weather/06.png';
import moonCloud from '../../assets/weather/07.png';
import moon from '../../assets/weather/08.png';
import snow from '../../assets/weather/09.png';
import mist from '../../assets/weather/10.png';

const icons = [sun, moon, sunCloud, moonCloud, softCloud, strongCloud, rain, storm, snow, mist];
const statesIcons = [
    ['01d'],
    ['01n'],
    ['02d'],
    ['02n'],
    ['03d', '03n'],
    ['04d', '04n'],
    ['09d', '09n', '10d', '10n'],
    ['11d', '11n'],
    ['13d', '13n'],
    ['50d', '50n'],
]


const convertIcon = (code) => {
    const res = statesIcons.find(setCode => setCode.includes(code));
    if(res){
        const ind = statesIcons.indexOf(res);
        return icons[ind];
    }
    return (code[2] === 'd') ? sun : moon;
}

const getWeather = async () => {
    return axios.get('https://api.openweathermap.org/data/2.5/weather?id=3430863&units=metric&lang=es&appid=4c788fc00d257d73350760cd87565255')
    .then( (res) => {
        if(res.status !== 200)
            return undefined;
        const { data } = res;
        const responseData = {
            feels_like : Number.parseInt(data.main.feels_like),
            temp: Number.parseInt(data.main.temp),
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            description: data.weather[0].description,
            icon: convertIcon(data.weather[0].icon),
        }
        return responseData;
    })
    .catch( (e) => {
        return undefined;
    })
}


export default {getWeather}