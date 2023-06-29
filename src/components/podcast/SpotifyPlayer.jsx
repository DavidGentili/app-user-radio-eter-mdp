import React from 'react'

export default function SpotifyPlayer({ episode }) {

    const episodeId = episode.split('/').pop().split('?')[0]

    return (
        <iframe
            style={{ borderRadius: '12px' }}
            src={`https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator`}
            width="100%"
            height="352px"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>

    )
}
