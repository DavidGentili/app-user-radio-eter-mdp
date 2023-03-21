import { React, } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '@pages/home';
import Player from '@components/generals/Player';
import Header from '@components/generals/Header'
import Footer from '@components/generals/Footer'
import usePublicies from './hooks/usePublicities';
import PanelReport from './pages/reports/PanelReport';
import SingleReport from './pages/reports/SingleReport';
import ErrorPage from './components/ErrorPage';
import PageTransition from './components/PageTransition';

function App() {

    const location = useLocation();

    const { oficialPublicities, standardPublicities } = usePublicies();

    return (
        <div className="App">
            <Header />
            <AnimatePresence >
                    <Routes location={location} key={location.pathname} >

                        <Route index element={<Home {...{ oficialPublicities, standardPublicities }} />} />

                        <Route path='informes'>
                            <Route index element={<PanelReport {...{ oficialPublicities, standardPublicities }} />} />
                            <Route path=':reportId' element={<SingleReport />} />
                        </Route>

                        <Route path='*' element={<ErrorPage />} />
                    </Routes>
            </AnimatePresence>
            <Footer />
            <Player />
        </div>
    )
}

export default App
