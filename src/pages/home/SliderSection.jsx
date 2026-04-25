import React from 'react'

import Publicity from '@components/Publicity';
import MainSlider from '@components/home/MainSlider';
import useMainSlider from '@hooks/useMainSlider';

export default function SliderSection({ standardPublicities }) {

    const { content, isLoading } = useMainSlider()


    return (
        <section className='sliderSection'>
            <MainSlider contentSlider={content} loading={isLoading} />

            <Publicity publicity={standardPublicities[0]} loading={standardPublicities.length === 0 ? true : false} />
            <Publicity publicity={standardPublicities[1]} loading={standardPublicities.length === 0 ? true : false} />
        </section>
    )
}
