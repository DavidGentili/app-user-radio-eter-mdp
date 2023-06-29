import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePodcastPanel({ podcasts }) {
    return (
        <article className='podcastList'>
            <h3>Podcast</h3>
            {
                podcasts.map(podcast => <Link to={`/podcast/${podcast.id}`} key={podcast.id} className='podcastItem' style={{ backgroundImage: `url(${podcast.imgUrl})` }}>
                    <Link to={`/podcast/${podcast.id}`} className="info">
                        <h5>{podcast.title}</h5>
                        <p>{podcast.description}</p>
                    </Link>
                    <div className="filter"></div>
                </Link>)
            }
        </article>
    )
}
