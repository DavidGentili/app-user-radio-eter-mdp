import React from 'react'
import SingleEpisode from './SingleEpisode'

export default function LatestEpisodes({ episodes }) {
    return (
        <section className='latestEpisodes'>
            <h2>Últimos episodios</h2>
            <div className="episodes">
                {episodes.map(episode => <SingleEpisode key={episode.id} {...episode} />)}
            </div>
        </section>
    )
}
