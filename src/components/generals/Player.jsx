import React, { useState, useRef, useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player';

import { PlayIcon, ChevronTopIcon, SoundIcon, MutedIcon, PauseIcon, Isotipo } from '@components/Icons';
import { getCurrentProgram } from '@services/programGrid';
import { mediaPlayerUrl } from '@services/config';


const Player = () => {

    const [expanded, setExpanded] = useState(false);
    const [played, setPlayed] = useState(false);
    const [sound, setSound] = useState(true);
    const [playerMessage, setPlayerMessage] = useState('');
    const [volume, setVolume] = useState(1);
    const playerRef = useRef(null);
    const spinnerRef = useRef(null);

    const handlerLoaded = (e) => {
        spinnerRef.current.classList.add('hidden');
        playerRef.current.classList.add('visible');
    }

    const handlerPlay = (e) => {
        if(playerRef && playerRef.current){
            setPlayed(!played)  
            if(!played)
                playerRef.current.play()
            else
                playerRef.current.pause()
        }
    }

    const handlerSound = (e) => {
        if(playerRef && playerRef.current){
            setSound(!sound)  
            if(!sound)
                playerRef.current.volume = volume;
            else
                playerRef.current.volume = 0;
        }
    }

    useEffect(() => {
        if(playerRef && playerRef.current && sound){
            playerRef.current.volume = volume;
        }
    }, [volume])

    useEffect(() => {
        getCurrentProgram()
        .then(({data}) => {
            const message = data.type ? data.name : data.message;
            setPlayerMessage(message ? message : 'Radio Eter MDP');
        })
        .catch(e => console.log(e));
    },[])

    return (
        <div className={"player" + (expanded ? ' expanded' : '')}>
            <div className="playerContainer">
                <div className="controls">
                    <button className='playBtn' onClick={handlerPlay}> { !played ? <PlayIcon/> : <PauseIcon/> } </button>
                    <button className='soundBtn' onClick={handlerSound}> { sound ? <SoundIcon/> : <MutedIcon/> } </button>
                    <input onChange={(e) => {setVolume(e.target.value)}} type="range" min='0' max='1' step='0.05' defaultValue='100' name="" id="" />
                </div>
                <h6>{playerMessage}</h6>
                <button onClick={() => {setExpanded(!expanded)}} className='expandBtn'> <ChevronTopIcon/></button>
                <div className="playerWindow">
                    <ReactHlsPlayer
                        className='hls-player'
                        src={ mediaPlayerUrl }
                        autoPlay = {false}
                        width = '100%'
                        height= 'auto'
                        playerRef={playerRef}    
                        onLoadedData={handlerLoaded}     
                                    
                    />
                    <span className='spinner' ref={spinnerRef}></span>
                </div>
            </div>
            <Isotipo />
        </div>
    )
}

export default Player