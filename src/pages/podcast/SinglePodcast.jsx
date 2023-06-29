import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ErrorPage from '@components/ErrorPage';
import PageTransition from '../../components/PageTransition';
import SinglePodcastPanel from '../../components/podcast/SinglePodcastPanel';
import { getPodcastWithEpisode } from '../../services/podcast';

export default function SinglePodcast({ oficialPublicities }) {

    const [podcast, setPodcast] = useState(null);
    const [isLoading, setloading] = useState(true);

    const { podcastId } = useParams();

    useEffect(() => {
        getPodcastWithEpisode(podcastId)
            .then(res => setPodcast(res))
            .catch(e => { })
            .finally(() => setloading(false));
    }, [])

    if (isLoading)
        return <></>

    if (!podcast)
        return <ErrorPage />

    return (
        <PageTransition className='singlePodcast' style={{ backgroundImage: `url(${podcast.imgUrl})` }}>
            <SinglePodcastPanel {...{ podcast, episodes: podcast.episodes, oficialPublicities }} />
            <div className="filter"></div>
            <div className="blur" style={{ backgroundImage: `url(${podcast.imgUrl})` }}></div>
        </PageTransition>
    )
}
