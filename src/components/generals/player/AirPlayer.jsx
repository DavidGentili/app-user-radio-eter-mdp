import React, { useState, useRef, useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player';

import { PlayIcon, ChevronTopIcon, SoundIcon, MutedIcon, PauseIcon, FullscreenIcon, ExitFullscreenIcon } from '@components/Icons';
import { getCurrentProgram } from '@services/programGrid';
import { mediaPlayerUrl } from '@config';

export default function AirPlayer() {
    const [expanded, setExpanded] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [played, setPlayed] = useState(false);
    const [sound, setSound] = useState(true);
    const [playerMessage, setPlayerMessage] = useState('Radio Eter MDP');
    const [volume, setVolume] = useState(1);
    const playerRef = useRef(null);
    const spinnerRef = useRef(null);
    const playerShellRef = useRef(null);

    const handlerLoaded = () => {
        spinnerRef.current?.classList.add('hidden');
        playerRef.current?.classList.add('visible');
    }

    const handlerPlay = () => {
        const player = playerRef.current;
        if (!player) return;

        if (!played) {
            player.play();
            setPlayed(true);
            return;
        }

        player.pause();
        setPlayed(false);
    }

    const handlerSound = () => {
        const player = playerRef.current;
        if (!player) return;

        if (sound) {
            player.volume = 0;
            setSound(false);
            return;
        }

        player.volume = volume;
        setSound(true);
    }

    useEffect(() => {
        if (playerRef.current && sound) {
            playerRef.current.volume = volume;
        }
    }, [volume, sound])

    useEffect(() => {
        const onFullscreenChange = () => {
            const current = document.fullscreenElement || document.webkitFullscreenElement;
            const isFull = current === playerShellRef.current;
            setIsFullscreen(isFull);
            if (isFull) setExpanded(true);
        };

        document.addEventListener('fullscreenchange', onFullscreenChange);
        document.addEventListener('webkitfullscreenchange', onFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', onFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
        };
    }, [])

    const handlerFullscreen = async () => {
        const shell = playerShellRef.current;
        const video = playerRef.current;
        if (!shell) return;

        const current = document.fullscreenElement || document.webkitFullscreenElement;
        if (current) {
            if (document.exitFullscreen) await document.exitFullscreen();
            else document.webkitExitFullscreen?.();
            return;
        }

        setExpanded(true);

        try {
            if (shell.requestFullscreen) await shell.requestFullscreen();
            else if (shell.webkitRequestFullscreen) shell.webkitRequestFullscreen();
            else video?.webkitEnterFullscreen?.();
        } catch (e) {
            video?.webkitEnterFullscreen?.();
        }
    }

    useEffect(() => {
        getCurrentProgram()
            .then(({ data }) => {
                const message = data.type ? data.name : data.message;
                setPlayerMessage(message ? message : 'Radio Eter MDP');
            })
            .catch(e => console.log(e));
    }, [])

    return (
        <div
            ref={playerShellRef}
            className={'airPlayer' + (expanded ? ' expanded' : '') + (isFullscreen ? ' fullscreen' : '')}
        >
            <div className="playerWindow">
                <ReactHlsPlayer
                    className='hls-player'
                    src={mediaPlayerUrl}
                    autoPlay={false}
                    width='100%'
                    height='auto'
                    playerRef={playerRef}
                    onLoadedData={handlerLoaded}
                    playsInline
                />
                <span className='spinner' ref={spinnerRef}></span>
            </div>
            <div className="airPlayerBar">
                <div className="controls">
                    <button type="button" className='playBtn' onClick={handlerPlay} aria-label={played ? 'Pausar' : 'Reproducir'}>
                        {!played ? <PlayIcon /> : <PauseIcon />}
                    </button>
                    <button type="button" className='soundBtn' onClick={handlerSound} aria-label={sound ? 'Silenciar' : 'Activar sonido'}>
                        {sound ? <SoundIcon /> : <MutedIcon />}
                    </button>
                    <input
                        onChange={(e) => { setVolume(Number(e.target.value)) }}
                        type="range"
                        min='0'
                        max='1'
                        step='0.05'
                        value={volume}
                        aria-label="Volumen"
                    />
                </div>
                <h6>{playerMessage}</h6>
                {/* <button
                    type="button"
                    onClick={handlerFullscreen}
                    className='fullscreenBtn'
                    aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
                >
                    {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
                </button> */}
                {/* <button
                    type="button"
                    onClick={() => { if (!isFullscreen) setExpanded(!expanded) }}
                    className='expandBtn'
                    aria-label={expanded ? 'Contraer reproductor' : 'Expandir reproductor'}
                    disabled={isFullscreen}
                >
                    <ChevronTopIcon />
                </button>*/}

            </div>
        </div>
    )
}
