import React, { useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@components/Icons';


const POPUP_FEATURES = 'popup=yes,width=1024,height=768';

const MainSlider = ({ contentSlider, loading }) => {

    const [sliderPosition, SetSliderPosition] = useState(0);

    const nextEvent = (e) => {
        SetSliderPosition((sliderPosition === contentSlider.length - 1) ? 0 : sliderPosition + 1);
    }

    const prevEvent = (e) => {
        SetSliderPosition((sliderPosition === 0) ? contentSlider.length - 1 : sliderPosition - 1);
    }

    const handleSlideLink = (event, href, popup) => {
        if (!popup) return;

        event.preventDefault();
        const opened = window.open(href, 'slider-popup', POPUP_FEATURES);
        if (opened) {
            opened.opener = null;
            return;
        }

        window.open(href, '_blank', 'noopener,noreferrer');
    };
    
    return (
        <div className={`mainSlider boxContainer ${loading && 'loading'}`}>
            {!loading && <button className='chevronLeft' onClick={prevEvent} ><ChevronLeftIcon /></button>}
            <div className="imageContainer" style={{ transform: `translateX(${-100 * sliderPosition}%)` }}>
                {contentSlider &&
                    contentSlider.map(({ urlImage, name, href, popup }, i) => (
                        <div key={urlImage + i} className='image'>
                            {href ? (
                                <a
                                    href={href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    onClick={(event) => handleSlideLink(event, href, popup)}
                                >
                                    <img src={urlImage} alt={name}></img>
                                </a>
                            ) : (
                                <img src={urlImage} alt={name}></img>
                            )}
                        </div>
                    ))
                }
            </div>
            {!loading && <button className='chevronRight' onClick={nextEvent} ><ChevronRightIcon /></button>}
        </div>
    )
}

export default MainSlider