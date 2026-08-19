import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion';

//Components
import SliderSection from './SliderSection';
import GridSection from './GridSection';
import ReportsSecitons from './ReportsSections';
import PageTransition from '../../components/PageTransition';
import PodcastSection from './PodcastSection';
import { Link } from 'react-router-dom';



const Home = ({ standardPublicities, oficialPublicities }) => {

    return (
        <PageTransition className='homePage'>
            <div className='homePage__background'></div>


            <SliderSection {...{ standardPublicities }} />

            <GridSection {...{ oficialPublicities }} />

            <ReportsSecitons />

            <PodcastSection />

        </PageTransition>
    )
}

export default Home