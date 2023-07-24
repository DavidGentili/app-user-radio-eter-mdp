import React, { useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@components/Icons';


const MainSlider = ({ contentSlider, loading }) => {

    const limit = 1;
    const [sliderPosition, SetSliderPosition] = useState(0);

    const nextEvent = (e) => {
        SetSliderPosition((sliderPosition === limit) ? 0 : sliderPosition + 1);
    }

    const prevEvent = (e) => {
        SetSliderPosition((sliderPosition === 0) ? limit : sliderPosition - 1);
    }
    return (
        <div className={`mainSlider boxContainer ${loading && 'loading'}`}>
            {!loading && <button className='chevronLeft' onClick={prevEvent} ><ChevronLeftIcon /></button>}
            <div className="imageContainer" style={{ transform: `translateX(${-100 * sliderPosition}%)` }}>
                {contentSlider &&
                    contentSlider.map(({ urlImage, name }, i) => <div key={urlImage + i} className='image'><img src={urlImage} alt={name}></img></div>)
                }
            </div>
            {!loading && <button className='chevronRight' onClick={nextEvent} ><ChevronRightIcon /></button>}
        </div>
    )
}

export default MainSlider