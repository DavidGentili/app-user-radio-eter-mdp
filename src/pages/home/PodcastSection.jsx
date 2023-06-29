import React, { useEffect, useState } from 'react'
import { getLatestEpisodes, getPodcast } from '../../services/podcast';
import HomePodcastPanel from '../../components/home/HomePodcastPanel';
import HomeEpisodesPanel from '../../components/home/HomeEpisodesPanel';

export default function PodcastSection() {


    const [podcasts, setPodcast] = useState([]);
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        getPodcast()
            .then(res => setPodcast(res.slice(0, 4)))
            .catch(e => { })
    }, [])

    useEffect(() => {
        getLatestEpisodes(3)
            .then(res => setEpisodes(res))
            .catch(e => { })
    }, [])

    return (
        <>
            {
                (podcasts && podcasts.length > 0) &&
                <section className='podcastSection'>
                    <HomePodcastPanel podcasts={podcasts} />
                    <HomeEpisodesPanel episodes={episodes} />
                    <a href="/podcast">Ver todos los podcast</a>
                </section>
            }

        </>
    )
}
