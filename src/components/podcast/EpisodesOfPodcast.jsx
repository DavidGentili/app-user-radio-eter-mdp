import React, { useState } from 'react'
import ListEpisodeElement from './ListEpisodeElement';
import UrlsPanel from '../generals/UrlsPanel';
import notEpisodes from '../../../assets/not-episodes.png';

export default function EpisodesOfPodcast({ episodes, defaultImg }) {

    const [currentEpisode, setCurrentEpisode] = useState(episodes[0] || null);

    if (!episodes || !episodes.length || episodes.length === 0) {
        return (
            <div className='notEpisodes'>
                <img src={notEpisodes} alt="No hay episodios" />
                <h6>El podcast seleccionado aun no tiene episodios</h6>
                <p>Pero puedes continuar viendo mas podcasts <a href="/podcast">por aqui</a></p>
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
                    <h4>{currentEpisode.title}</h4>
                    <p>{currentEpisode.description}</p>
                    <UrlsPanel {...currentEpisode.urls} />
                </>}
            </div>
        </div>
    )
}
