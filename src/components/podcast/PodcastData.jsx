import React from 'react'
import UrlsPanel from '../generals/UrlsPanel'

export default function PodcastData({ title, description, urls, imgUrl }) {

    return (
        <article className='podcastData'>
            <div className="info">
                <h2>{title}</h2>
                <p>{description}</p>
                <UrlsPanel {...urls} />
            </div>
            <div className="image" style={{ backgroundImage: `url(${imgUrl})` }}></div>
        </article>
    )
}
