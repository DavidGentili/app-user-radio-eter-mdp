import { React, useEffect, useRef } from 'react';

import StreamWindow from '../components/StreamWindow/StreamWindow';
import Isotipo from '../components/Isotipo';
import WeatherPanel from '../components/weather/WeatherPanel';
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

import publicity1 from '../../assets/publicity-1.jpeg';
import publicity2 from '../../assets/publicity-2.gif'


import './Stream.css'

const showElements = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    })
}

const observer = new IntersectionObserver(showElements,{
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
})


const Stream = () => {

    const publicityRef = useRef(null);

    useEffect(() => {
        console.log(publicityRef);
    }, []);

    return(
        <>
            <Isotipo className='backgroundIsotipo' fill={'var(--lighthBlue)'} />
            <Header /> 
            <div className="container">
                <StreamWindow />
                <div className="publicitySpace" ref={publicityRef}>
                    <a className='individualPublicity publicity1' href="#" target='_blank' rel='oopener noreferrer' >
                        <img src={publicity1} alt="" />
                    </a>
                    <a className='individualPublicity publicity2' href="#" target='_blank' rel='oopener noreferrer' >
                        <img src={publicity2} alt="" />
                    </a>
                </div>

                <WeatherPanel />
            </div>

            <Footer />

        </>
    )
}

export default Stream