import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


//Styles General
import '@styles/general/globals.css'
import '@styles/general/App.css'
import '@styles/general/errorPage.css'
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
import '@styles/home/podcastSection.css';

//Styles Reports
import '@styles/reports/reports.css'
import '@styles/reports/reportSlider.css'
import '@styles/reports/allReports.css'
import '@styles/reports/singleReportMain.css'
import '@styles/reports/otherReports.css'

//Styles Podcast
import '@styles/podcast/mainSlider.css'
import '@styles/podcast/episodePodcastPanel.css'
import '@styles/podcast/podcastData.css'
import '@styles/podcast/singlePodcast.css'
import '@styles/podcast/episodesOfPodcast.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,

)
