import { React, useState, useEffect, forwardRef } from 'react';
import  weatherAPI from '../../services/weatherAPI'

import './weatherPanel.css'

const WeatherPanel = forwardRef((props, ref) => {

    const [weather, setWeather] = useState(undefined)
    const [time, setTime] = useState(new Date(Date.now()))

    useEffect(()=> {
        const interval = setInterval(() => {
            setTime(new Date(Date.now()))
        }, 1000);
        return () => {
            clearInterval(interval)
        };
    }, [])

    useEffect(() => {
        weatherAPI.getWeather().then(weather => setWeather(weather))
    }, [])

    return (
        <div className={'weatherPanel ' + ( !weather ? 'weatherPanelLoading' : '')} ref={ref}>
            { weather && <>
                <img className='weatherIcon' src={weather.icon} alt="" />
                <h6 className='temp'>{weather.temp}°C</h6>
                <div className='weatherInfo'>
                    <p><span>ST</span> {weather.feels_like}°</p>
                    <p><span>H</span> {weather.humidity}%</p>
                    <p className='pressure'><span>P</span> {weather.pressure}hPa</p>
                    <p className='wind'><span>V</span> {weather.wind}Km/h</p>
                </div>
                <p className='time'>{time.toLocaleDateString()} - {time.toLocaleTimeString().slice(0,5)}</p>
            </>}
        </div>
    )
})

export default WeatherPanel;