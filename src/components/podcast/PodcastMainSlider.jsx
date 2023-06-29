import React from 'react'
import SliderPodcastContent from './SliderPodcastContent'
import useSlider from '../../hooks/useSlider'
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';

export default function PodcastMainSlider({ podcast }) {

    const { prev, next, defineIndex, index} = useSlider(podcast);


    return (
        <section className='mainSlider' style={{backgroundImage: `url(${podcast[index].imgUrl})`}}>
            <div className="sliderContainer">
                <div className="container" style={{transform: `translateX(-${index * 100}%)`}}>
                    {
                        podcast.map(program => <SliderPodcastContent key={program.id} podcast={program} />)
                    }
                </div>
            </div>
            <div className="controls">
                <button onClick={prev}> <ChevronLeftIcon/> </button>
                <button onClick={next}> <ChevronRightIcon/> </button>
            </div>
            <div className="filter"></div>
            <div className="blur" style={{backgroundImage: `url(${podcast[index].imgUrl})`}}></div>
        </section>
    )
}
