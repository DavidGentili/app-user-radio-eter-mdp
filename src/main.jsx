import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


//Styles General
import '@styles/general/globals.css'
import '@styles/general/App.css'
import '@styles/general/footer.css'
import '@styles/general/header.css'
import '@styles/general/weatherPanel.css'
import '@styles/general/player.css'
import '@styles/general/publicityPanel.css'
import '@styles/general/publicity.css'



//Styles Home
import '@styles/home/home.css';
import '@styles/home/programGrid.css';
import '@styles/home/mainSlider.css';
import '@styles/home/reportSection.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
