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
import { getHighlightedPrograms } from '../services/program'
import Stream from '../../assets/ej-stream.png'

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

const initialSlider = [
    {
        urlImage : Stream,
        name : 'standard'
    },
    {
        urlImage : Stream,
        name : 'standard'
    },
    {
        urlImage : Stream,
        name : 'standard'
    }
]

const completePublicities = (data) => {
    const aux = [ ...initialPublicities];
    while(data.length < 2){
        data.push(aux.shift());
    }
}

const completeSliderContent = (data) => {
    const sliderContent = []
    data.forEach(program => {
        if(program.urlImage)
            sliderContent.push(program)
    });
    const aux = [...initialSlider];
    while(sliderContent.length < 3){
        sliderContent.push(aux.shift());
    }
    return sliderContent;
}

const Home = () => {

    const [standardPublicities, setStandardPublicities] = useState([]);
    const [oficialPublicities, setOficialPublicities] = useState([]);
    const [mainSliderContent, setMainSliderContent] = useState([]);

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

    useEffect(() => {
        getHighlightedPrograms()
        .then(({data}) => {
            const sliderContent = completeSliderContent(data);
            setMainSliderContent(sliderContent);
        })
        .catch(e => console.log(e)) 
    }, [])

    return (
        <main className='homeMain'>
            <Header />
            <section className='mainSection'>
                <MainSlider contentSlider={mainSliderContent} loading={mainSliderContent.length === 0 ? true : false} />

                <Publicity publicity={standardPublicities[0]} loading={standardPublicities.length === 0 ? true : false} />
                <Publicity publicity={standardPublicities[1]} loading={standardPublicities.length === 0 ? true : false} />
            </section>

            <section className="secondarySection">
                <ProgramGrid />
                <WeatherPanel className/>
                <Publicity publicity={oficialPublicities[0]} loading={oficialPublicities.length === 0 ? true : false} />
                <Publicity publicity={oficialPublicities[1]} loading={oficialPublicities.length === 0 ? true : false} />

            </section>

            <Footer />

        </main>
    )
}

export default Home