import React from 'react'
import UrlsPanel from '../generals/UrlsPanel'

export default function SingleEpisode({ title, podcastTitle, imgUrl, urls }) {

    return (
        <article className='singleEpisode' style={{ backgroundImage: `url(${imgUrl})` }}>
            <div className="info">
                <h4>{title}</h4>
                <h5>{podcastTitle}</h5>
            </div>
            <UrlsPanel {...urls} />
            <div className='filter'></div>
        </article>
    )
}
