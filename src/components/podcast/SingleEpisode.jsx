import React from 'react'
import UrlsPanel from '../generals/UrlsPanel'

export default function SingleEpisode({ title, podcastTitle, podcastId, imgUrl, urls }) {

    return (
        <article className='singleEpisode' style={{ backgroundImage: `url(${imgUrl})` }}>
            <div className="info">
                <h4>{title}</h4>
                <a href={`/podcast/${podcastId}`}>{podcastTitle}</a>
            </div>
            <UrlsPanel {...urls} />
            <div className='filter'></div>
        </article>
    )
}
