import React, { useEffect, useState } from 'react'
import { getLatestEpisodes, getPodcast } from '../../services/podcast';
import PageTransition from '../../components/PageTransition';
import PodcastMainSlider from '../../components/podcast/PodcastMainSlider';
import LatestEpisodes from '../../components/podcast/LatestEpisodes';
import PublicityPanel from '../../components/PublicityPanel';

export default function PanelPodcast({ oficialPublicities }) {

    const [podcast, setPodcast] = useState([]);
    const [episodes, setEpisode] = useState([]);

    useEffect(() => {
        getPodcast()
            .then(data => {
                setPodcast(data);
            })
            .catch(e => { })
    }, [])

    useEffect(() => {
        getLatestEpisodes(6)
            .then(res => setEpisode(res))
            .catch(e => { })
    }, [])


    return (
        <PageTransition className='podcastPage'>
            {podcast.length > 0 && <PodcastMainSlider podcast={podcast} />}
            {episodes.length > 0 && <LatestEpisodes episodes={episodes} />}
            {oficialPublicities && <section><PublicityPanel horizontal oficialPublicities={oficialPublicities} /></section>}
        </PageTransition>
    )
}
