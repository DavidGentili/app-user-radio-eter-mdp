import React from 'react'
import SingleEpisode from '../podcast/SingleEpisode'

export default function HomeEpisodesPanel({ episodes }) {
    return (
        <article className='episodesList'>
            <h3>Episodios</h3>
            {
                episodes.map(episode => <SingleEpisode key={episode.id} {...episode} />)
            }
        </article>
    )
}
