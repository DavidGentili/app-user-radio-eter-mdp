import React from 'react'
import PodcastData from './PodcastData'
import EpisodesOfPodcast from './EpisodesOfPodcast'
import PublicityPanel from '../PublicityPanel'

export default function SinglePodcastPanel({ podcast, episodes, oficialPublicities }) {


    return (
        <section className='singlePodcastPanel'>
            <PodcastData {...podcast} />
            <EpisodesOfPodcast episodes={episodes} defaultImg={podcast.imgUrl} />
            <PublicityPanel horizontal oficialPublicities={oficialPublicities} />
        </section>
    )
}
