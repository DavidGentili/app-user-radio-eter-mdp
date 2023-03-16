import { React } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '@pages/home';
import Player from '@components/generals/player';

import Header from '@components/generals/Header'
import Footer from '@components/generals/Footer'




function App() {

    const location = useLocation();

    return (
        <div className="App">
            <Header />
                <Routes location={location} key={location.pathname} >
                    <Route path='/' element={ <Home />} />

                </Routes>

            <Footer />
            {/* <Player/> */}
        </div>
    )
}

export default App
