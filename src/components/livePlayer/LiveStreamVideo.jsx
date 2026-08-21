import { useRef } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { mediaPlayerUrl } from '@config';

export default function LiveStreamVideo() {
    const playerRef = useRef(null);

    return (
        <div className='liveStreamVideo'>
            <ReactHlsPlayer
                className='liveStreamVideo__player'
                src={mediaPlayerUrl}
                autoPlay={false}
                controls
                width='100%'
                height='auto'
                playerRef={playerRef}
                playsInline
            />
        </div>
    )
}
