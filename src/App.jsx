import { React, } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '@pages/home';
import Player from '@components/generals/Player';

import Header from '@components/generals/Header'
import Footer from '@components/generals/Footer'
import usePublicies from './hooks/usePublicities';
import PanelReport from './pages/reports/PanelReport';
import SingleReport from './pages/reports/SingleReport';

function App() {

    const location = useLocation();

    const { oficialPublicities, standardPublicities } = usePublicies();

    return (
        <div className="App">
            <Header />
            <Routes location={location} key={location.pathname} >
                <Route path='' element={<Home {...{ oficialPublicities, standardPublicities }} />} />
                <Route path='informes' element={<PanelReport {...{ oficialPublicities, standardPublicities }} />} />
                <Route path='/informes/:reportId' element={<SingleReport />} />

            </Routes>

            <Footer />
            {/* <Player/> */}
        </div>
    )
}

export default App
