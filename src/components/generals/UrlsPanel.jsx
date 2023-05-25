import React from 'react'
import { SpotifyIcon, YoutubeIcon, GooglePodcastIcon, SoundcloudIcon } from '../Icons'

export default function UrlsPanel({ google, soundcloud, spotify, youtube }) {
    return (
        <div className="urls">
            {spotify && <a href={spotify} target='_blank' rel="noreferrer"> <SpotifyIcon /> </a>}
            {youtube && <a href={youtube} target='_blank' rel="noreferrer"> <YoutubeIcon /> </a>}
            {google && <a href={google} target='_blank' rel="noreferrer"> <GooglePodcastIcon /> </a>}
            {soundcloud && <a href={soundcloud} target='_blank' rel="noreferrer"> <SoundcloudIcon /> </a>}
        </div>
    )
}
