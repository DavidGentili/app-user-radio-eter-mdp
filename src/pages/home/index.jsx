import React, { useEffect, useState, useRef } from 'react'

//Components
import SliderSection from './SliderSection';
import GridSection from './GridSection';
import ReportsSecitons from './ReportsSecitons';



const Home = ({ standardPublicities, oficialPublicities }) => {

    return (
        <main className='homePage'>

            <SliderSection {...{ standardPublicities }} />

            <ReportsSecitons />

            <GridSection {...{ oficialPublicities }} />


        </main>
    )
}

export default Home