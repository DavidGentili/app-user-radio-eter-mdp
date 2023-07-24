import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion';

//Components
import SliderSection from './SliderSection';
import GridSection from './GridSection';
import ReportsSecitons from './ReportsSections';
import PageTransition from '../../components/PageTransition';
import PodcastSection from './PodcastSection';



const Home = ({ standardPublicities, oficialPublicities }) => {

    return (
        <PageTransition className='homePage'>

            <SliderSection {...{ standardPublicities }} />

            <GridSection {...{ oficialPublicities }} />

            <ReportsSecitons />

            <PodcastSection />


        </PageTransition>
    )
}

export default Home