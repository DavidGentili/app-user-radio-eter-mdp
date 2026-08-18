import React, { useState, useEffect, useRef } from 'react'

import GridDay from './GridDay';

import { ChevronLeftIcon, ChevronRightIcon } from '@components/Icons';

import {
    getCurrentSliderIndex,
    getInitialStateSliderGrid,
    getLimit,
    getSliderStep,
    scrollGridToIndex,
} from '@helpers/programGrid';

import { getProgramGrid } from '@services/programGrid';


const daysValues = [
    { value: 'monday', text: 'Lunes' },
    { value: 'tuesday', text: 'Martes' },
    { value: 'wednesday', text: 'Miercoles' },
    { value: 'thursday', text: 'Jueves' },
    { value: 'friday', text: 'Viernes' },
    { value: 'saturday', text: 'Sabado' },
    { value: 'sunday', text: 'Domingo' }
]

const ProgramGrid = () => {
    const [programGrid, setProgramGrid] = useState([]);
    const contentRef = useRef(null);

    useEffect(() => {
        getProgramGrid()
            .then(({ data }) => {
                setProgramGrid(data);
            })
            .catch(e => console.log(e));
    }, [])

    useEffect(() => {
        const el = contentRef.current;
        if (!el || programGrid.length === 0) return;

        scrollGridToIndex(el, getInitialStateSliderGrid(), 'auto');

        const onResize = () => {
            const current = getCurrentSliderIndex(el);
            scrollGridToIndex(el, Math.min(current, getLimit()), 'auto');
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [programGrid])

    const nextEvent = () => {
        const el = contentRef.current;
        if (!el) return;

        const max = getLimit();
        const current = getCurrentSliderIndex(el);
        if (current >= max) {
            scrollGridToIndex(el, 0);
            return;
        }

        el.scrollBy({ left: getSliderStep(el), behavior: 'smooth' });
    }

    const prevEvent = () => {
        const el = contentRef.current;
        if (!el) return;

        const current = getCurrentSliderIndex(el);
        if (current <= 0) {
            scrollGridToIndex(el, getLimit());
            return;
        }

        el.scrollBy({ left: -getSliderStep(el), behavior: 'smooth' });
    }

    return (
        <div className='programGrid'>
            <button type="button" className='chevronLeft' onClick={prevEvent} aria-label="Día anterior">
                <ChevronLeftIcon />
            </button>
            <div className="contentDays" ref={contentRef}>
                {(programGrid && programGrid.length > 0) ?
                    programGrid.map((value, index) =>
                        <GridDay key={daysValues[index].value} dayName={daysValues[index].text} programs={value} />
                    )
                    :
                    <></>
                }
            </div>
            <button type="button" className='chevronRight' onClick={nextEvent} aria-label="Día siguiente">
                <ChevronRightIcon />
            </button>
        </div>
    )
}

export default ProgramGrid
