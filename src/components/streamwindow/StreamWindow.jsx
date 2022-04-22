import { React, useRef } from 'react';
import ReactHlsPlayer from 'react-hls-player';

import './streamWindow.css'

const StreamWindow = () => {

    const playerRef = useRef(null);
    const spinnerRef = useRef(null);

    const handlerLoaded = (e) => {
        spinnerRef.current.classList.add('hidden');
        playerRef.current.classList.add('visible')
    }

    return (
        <div className="streamWindow">
            <ReactHlsPlayer
                className='hls-player'
                src='https://59537faa0729a.streamlock.net:443/radioetermdp/radioetermdp/playlist.m3u8'
                autoPlay = {false}
                controls = {true}
                width = '100%'
                height= 'auto'
                playerRef={playerRef}    
                onLoadedData={handlerLoaded}            
            />
            <span className='spinner' ref={spinnerRef}></span>

        </div>
    )
}

export default StreamWindow;