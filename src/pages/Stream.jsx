import { React } from 'react';
import StreamWindow from '../components/StreamWindow/StreamWindow';
import Isotipo from '../components/Isotipo';
import WeatherPanel from '../components/weather/WeatherPanel';
import Footer from '../components/footer/Footer'

import logotipoWhite from '../../assets/logotipo-w.png';
import publicity1 from '../../assets/publicity-1.jpeg';
import publicity2 from '../../assets/publicity-2.gif'


import './Stream.css'


const Stream = () => {

    return(
        <>
            <Isotipo className='backgroundIsotipo' fill={'var(--lighthBlueColor)'} />
            <img src={logotipoWhite} className='logotipo' alt="Radio Eter MDP" />
            <div className="container">
                <StreamWindow />
                <div className="publicitySpace">
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