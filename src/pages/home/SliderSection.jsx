import React from 'react'

import Publicity from '@components/Publicity';
import MainSlider from '@components/home/MainSlider';
import useHighligthedProgram from '@hooks/useHighligthedProgram';

export default function SliderSection({ standardPublicities }) {

    const mainSliderContent = useHighligthedProgram()

    return (
        <section className='sliderSection'>
            <MainSlider contentSlider={mainSliderContent} loading={mainSliderContent.length === 0 ? true : false} />

            <Publicity publicity={standardPublicities[0]} loading={standardPublicities.length === 0 ? true : false} />
            <Publicity publicity={standardPublicities[1]} loading={standardPublicities.length === 0 ? true : false} />
        </section>
    )
}
