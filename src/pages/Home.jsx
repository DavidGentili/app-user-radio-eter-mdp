import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/header/Header'

import publicity1 from '../../assets/publicity-1.gif'
import publicity2 from '../../assets/publicity-2.gif'
import MainSlider from '../components/mainSlider/MainSlider'
import { getStandardPublicities } from '../services/publicity'


import './home.css'


const initialPublicities = [
    {
        src: publicity1,
        link: "#"
    },
    {
        src: publicity2,
        link: "#"
    },
]

const Home = () => {

    const [standardPublicities, setstandardPublicities] = useState([])

    useEffect( () => {
        getStandardPublicities().then(data => {
            const aux = [ ...initialPublicities];
            while(data.length < 2){
                data.push(aux.shift());
            }
            setstandardPublicities(data);
        })
    }, [])

    return (
        <main className='homeMain'>
            <Header />
            <section className='mainSection'>
                
                <MainSlider />

                <div className="publicityImage boxContainer">
                    { standardPublicities[0] && <a href="#"><img className='publicityImage' src={standardPublicities[0].src} alt="Esta es una publicidad" /></a>}
                </div>
                <div className="publicityImage boxContainer">
                    { standardPublicities[1] && <a href="#"><img className='publicityImage' src={standardPublicities[1].src} alt="Esta es una publicidad" /></a>}
                </div>

            </section>
        </main>
    )
}

export default Home