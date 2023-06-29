import React from 'react'

export default function HomePodcastPanel({ podcasts }) {
    return (
        <article className='podcastList'>
            <h3>Podcast</h3>
            {
                podcasts.map(podcast => <div key={podcast.id} className='podcastItem' style={{ backgroundImage: `url(${podcast.imgUrl})` }}>
                    <a href={`/podcast/${podcast.id}`} className="info">
                        <h5>{podcast.title}</h5>
                        <p>{podcast.description}</p>
                    </a>
                    <div className="filter"></div>
                </div>)
            }
        </article>
    )
}
