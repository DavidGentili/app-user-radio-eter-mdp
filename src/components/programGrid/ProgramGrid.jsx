import React, { useState, useEffect } from 'react'

import './programGrid.css';
import GridDay from './GridDay';

import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';

import { programs, getInitialStateSliderGrid } from './utils';


const daysValues = [
    {
        value: 'monday',
        text: 'Lunes'
    },
    {
        value: 'tuesday',
        text: 'Martes'
    },
    {
        value: 'wednesday',
        text: 'Miercoles'
    },
    {
        value: 'thursday',
        text: 'Jueves'
    },
    {
        value: 'friday',
        text: 'Viernes'
    },
    {
        value: 'saturday',
        text: 'Sabado'
    },
    {
        value: 'sunday',
        text: 'Domingo'
    }
]

const ProgramGrid = () => {

    const limit = 4;
    const [sliderPosition, SetSliderPosition] = useState(getInitialStateSliderGrid());

    const nextEvent = (e) => {
        SetSliderPosition( (sliderPosition === limit ) ? 0 : sliderPosition + 1);
    }

    const prevEvent = (e) => {
        SetSliderPosition( (sliderPosition === 0 ) ? limit : sliderPosition - 1);
    }

    console.log(sliderPosition)

    return (
        <div className='programGrid'>
            <button className='chevronLeft' onClick={prevEvent} ><ChevronLeftIcon /></button>
            <div className="contentDays" style={{transform : `translateX(${-33* sliderPosition }%)`}}>
                {programs.map((value, index) => 
                    <GridDay key={daysValues[index].value} dayName={daysValues[index].text} programs={value} />
                )}
            </div>
            <button className='chevronRight' onClick={nextEvent} ><ChevronRightIcon /></button>
        </div>
    )
}

export default ProgramGrid