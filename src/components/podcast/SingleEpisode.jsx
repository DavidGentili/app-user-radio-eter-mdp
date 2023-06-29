import React from 'react'
import UrlsPanel from '../generals/UrlsPanel'
import { Link } from 'react-router-dom'

export default function SingleEpisode({ title, podcastTitle, podcastId, imgUrl, urls }) {

    return (
        <article className='singleEpisode' style={{ backgroundImage: `url(${imgUrl})` }}>
            <Link to={`/podcast/${podcastId}`} className="info">
                <h4>{title}</h4>
                <Link to={`/podcast/${podcastId}`}>{podcastTitle}</Link>
            </Link>
            <UrlsPanel {...urls} />
            <div className='filter'></div>
        </article>
    )
}
