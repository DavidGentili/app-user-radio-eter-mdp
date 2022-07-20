import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/header/Header'

import publicity1 from '../../assets/publicity-1.gif'
import publicity2 from '../../assets/publicity-2.gif'
import MainSlider from '../components/mainSlider/MainSlider'
import ProgramGrid from '../components/programGrid/ProgramGrid'
import WeatherPanel from '../components/weather/WeatherPanel';
import Publicity from '../components/Publicity'
import Footer from '../components/footer/Footer'
import { getStandardPublicities, getOficialPublicities } from '../services/publicity'


import './home.css'


const initialPublicities = [
    {
        urlImage: publicity1,
        link: "#"
    },
    {
        urlImage: publicity2,
        link: "#"
    },
]

const completePublicities = (data) => {
    const aux = [ ...initialPublicities];
    while(data.length < 2){
        data.push(aux.shift());
    }
}

const Home = () => {

    const [standardPublicities, setStandardPublicities] = useState([])
    const [oficialPublicities, setOficialPublicities] = useState([])

    useEffect( () => {
        getStandardPublicities().then(data => {
            completePublicities(data);
            setStandardPublicities(data);
        })
        .catch()
    }, [])

    useEffect( () => {
        getOficialPublicities().then(data => {
            completePublicities(data);
            setOficialPublicities(data);
        })
        .catch()
    }, [])

    return (
        <main className='homeMain'>
            <Header />
            <section className='mainSection'>
                <MainSlider />

                <Publicity publicity={standardPublicities[0]} />
                <Publicity publicity={standardPublicities[1]} />
            </section>

            <section className="secondarySection">
                <ProgramGrid />
                <WeatherPanel className/>
                <Publicity publicity={oficialPublicities[0]} />
                <Publicity publicity={oficialPublicities[1]} />

            </section>

            <Footer />

        </main>
    )
}

export default Home