import { React, useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '@pages/home';
import Player from '@components/generals/player';

import Header from '@components/generals/Header'
import Footer from '@components/generals/Footer'
import { completePublicities } from '@helpers/publicity';
import { getStandardPublicities, getOficialPublicities } from '@services/publicity';
import usePublicies from './hooks/usePublicities';

function App() {

    const location = useLocation();

    const { oficialPublicities, standardPublicities } = usePublicies();


    return (
        <div className="App">
            <Header />
            <Routes location={location} key={location.pathname} >
                <Route path='/' element={<Home {...{ oficialPublicities, standardPublicities }} />} />

            </Routes>

            <Footer />
            {/* <Player/> */}
        </div>
    )
}

export default App
