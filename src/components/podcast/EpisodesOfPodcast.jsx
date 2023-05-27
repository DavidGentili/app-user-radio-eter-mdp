import React, { useState } from 'react'
import ListEpisodeElement from './ListEpisodeElement';
import UrlsPanel from '../generals/UrlsPanel';

export default function EpisodesOfPodcast({ episodes, defaultImg }) {

    const [currentEpisode, setCurrentEpisode] = useState(episodes[0] || null);

    if (!episodes || !episodes.length || episodes.length === 0) {
        return (
            <div className='notEpisodes'>
                <p>El podcast seleccionado no tiene episodios</p>
            </div>
        )
    }

    const getSelectEvent = (episode) => {
        return () => {
            setCurrentEpisode(episode)
        }
    }

    return (
        <div className="episodesOfPoscast">
            <div className="episodeList">
                {
                    episodes.map(episode => <ListEpisodeElement {...{ key: episode.id, ...episode, selectAction: getSelectEvent(episode), active: episode === currentEpisode }} />)
                }
            </div>
            <div className="selectedEpisode">
                {currentEpisode && <>
                    <img src={currentEpisode.imgUrl || defaultImg} alt={currentEpisode.title} />
                    <p>{currentEpisode.description}</p>
                    <UrlsPanel {...currentEpisode.urls} />
                </>}
            </div>
        </div>
    )
}
