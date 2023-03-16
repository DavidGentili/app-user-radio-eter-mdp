import React, { useState, useEffect } from 'react'

import GridDay from './GridDay';

import { ChevronLeftIcon, ChevronRightIcon } from '@components/Icons';

import { getInitialStateSliderGrid, getLimit } from '@helpers/programGrid';


const daysValues = [
    { value: 'monday', text: 'Lunes' },
    { value: 'tuesday', text: 'Martes' },
    { value: 'wednesday', text: 'Miercoles' },
    { value: 'thursday', text: 'Jueves' },
    { value: 'friday', text: 'Viernes' },
    { value: 'saturday', text: 'Sabado' },
    { value: 'sunday', text: 'Domingo' }
]

const ProgramGrid = ({ programGrid }) => {

    const [sliderPosition, SetSliderPosition] = useState(getInitialStateSliderGrid());

    const nextEvent = (e) => {
        const limit = getLimit();
        SetSliderPosition((sliderPosition === limit) ? 0 : sliderPosition + 1);
    }

    const prevEvent = (e) => {
        const limit = getLimit();
        SetSliderPosition((sliderPosition === 0) ? limit : sliderPosition - 1);
    }

    return (
        <div className='programGrid'>
            <button className='chevronLeft' onClick={prevEvent} ><ChevronLeftIcon /></button>
            <div className="contentDays" style={{ transform: `translateX(calc(var(--slide) * ${-sliderPosition}))` }}>
                {(programGrid && programGrid.length > 0) ?
                    programGrid.map((value, index) =>
                        <GridDay key={daysValues[index].value} dayName={daysValues[index].text} programs={value} />
                    )
                    :
                    <></>
                }
            </div>
            <button className='chevronRight' onClick={nextEvent} ><ChevronRightIcon /></button>
        </div>
    )
}

export default ProgramGrid