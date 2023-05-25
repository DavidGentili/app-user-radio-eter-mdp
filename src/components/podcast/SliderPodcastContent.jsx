import React from 'react'
import { Link } from 'react-router-dom'

export default function SliderPodcastContent({ podcast }) {

    const { id, title, description, imgUrl } = podcast

    return (
        <div className="sliderContent">
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={`/podcast/${id}`}>Escuchalo</Link>
            </div>
            <div className="image" style={{backgroundImage: `url(${imgUrl})`}}></div>
        </div>
    )
}
