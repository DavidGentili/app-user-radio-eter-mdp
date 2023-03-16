import React, { useEffect, useState, useRef } from 'react'


import MainSlider from './MainSlider'
import ProgramGrid from './ProgramGrid'
import Publicity from '../../components/Publicity'
import { getStandardPublicities, getOficialPublicities } from '@services/publicity'
import { getHighlightedPrograms } from '@services/program'
import { getProgramGrid } from '@services/programGrid'
import slider1 from '@assets/slider-1.jpg'
import slider2 from '@assets/slider-2.jpg'
import PublicityPanel from '@components/PublicityPanel';
import { completePublicities } from '../../helpers/publicity';

const initialSlider = [
    {
        urlImage: slider1,
        name: 'slider-standard-1'
    },
    {
        urlImage: slider2,
        name: 'slider-standard-2'
    }
]


const completeSliderContent = (data) => {
    const sliderContent = []
    data.forEach(program => {
        if (program.urlImage)
            sliderContent.push(program)
    });
    const aux = [...initialSlider];
    while (sliderContent.length < 3 && aux.length > 0) {
        sliderContent.push(aux.shift());
    }
    return sliderContent;
}

const Home = ({ standardPublicities, oficialPublicities }) => {

    const [mainSliderContent, setMainSliderContent] = useState([]);
    const [programGrid, setProgramGrid] = useState([]);


    useEffect(() => {
        getHighlightedPrograms()
            .then(({ data }) => {
                const sliderContent = completeSliderContent(data);
                setMainSliderContent(sliderContent);
            })
            .catch(e => console.log(e))
    }, [])

    useEffect(() => {
        getProgramGrid()
            .then(({ data }) => {
                setProgramGrid(data);
            })
            .catch(e => console.log(e));
    }, [])

    return (
        <main className='homePage'>

            <section className='mainSection'>
                <MainSlider contentSlider={mainSliderContent} loading={mainSliderContent.length === 0 ? true : false} />

                <Publicity publicity={standardPublicities[0]} loading={standardPublicities.length === 0 ? true : false} />
                <Publicity publicity={standardPublicities[1]} loading={standardPublicities.length === 0 ? true : false} />
            </section>

            <section className="secondarySection">
                <ProgramGrid programGrid={programGrid} />

                <PublicityPanel {...{oficialPublicities}}/>

            </section>

        </main>
    )
}

export default Home