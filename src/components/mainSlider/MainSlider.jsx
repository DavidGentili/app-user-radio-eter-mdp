import React, { useEffect, useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import stream from '../../../assets/ej-stream.png'

import './mainSlider.css'

const MainSlider = () => {

    const limit = 2;
    const [sliderPosition, SetSliderPosition] = useState(0);

    const nextEvent = (e) => {
        SetSliderPosition( (sliderPosition === limit ) ? 0 : sliderPosition + 1);
    }

    const prevEvent = (e) => {
        SetSliderPosition( (sliderPosition === 0 ) ? limit : sliderPosition - 1);
    }
    return (
        <div className="mainSlider boxContainer">
            <button className='chevronLeft' onClick={prevEvent} ><ChevronLeftIcon /></button>
            <div className="imageContainer" style={{transform : `translateX(${-100* sliderPosition }%)`}}>
                <img src={stream} alt="" />
                <img src={stream} alt="" />
                <img src={stream} alt="" />

            </div>
            <button className='chevronRight' onClick={nextEvent} ><ChevronRightIcon /></button>
        </div>
    )
}

export default MainSlider