import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/header/Header'

import publicity1 from '../../assets/publicity-1.gif'
import publicity2 from '../../assets/publicity-2.gif'
import MainSlider from '../components/mainSlider/MainSlider'
import ProgramGrid from '../components/programGrid/ProgramGrid'
import WeatherPanel from '../components/weather/WeatherPanel';
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

                <div className="publicityImage boxContainer">
                    { standardPublicities[0] && 
                        <a href={standardPublicities[0].link}>
                            <img className='publicityImage' src={standardPublicities[0].urlImage} alt="Esta es una publicidad" />
                        </a>
                    }
                </div>
                <div className="publicityImage boxContainer">
                    { standardPublicities[1] && 
                        <a href={standardPublicities[1].link}>
                            <img className='publicityImage' src={standardPublicities[1].urlImage} alt="Esta es una publicidad" />
                        </a>
                    }
                </div>
            </section>

            <section className="secondarySection">
                <ProgramGrid />
                <WeatherPanel className/>
                <div className="publicityImage boxContainer">
                    { oficialPublicities[0] && 
                        <a href={oficialPublicities[0].link}>
                            <img className='publicityImage' src={oficialPublicities[0].urlImage} alt="Esta es una publicidad" />
                        </a>
                    }
                </div>
                <div className="publicityImage boxContainer">
                    { oficialPublicities[1] && 
                        <a href={oficialPublicities[1].link}>
                            <img className='publicityImage' src={oficialPublicities[1].urlImage} alt="Esta es una publicidad" />
                        </a>
                    }
                </div>
            </section>
        </main>
    )
}

export default Home