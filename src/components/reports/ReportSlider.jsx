import React, { useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@components/Icons';

export default function ReportSlider({ reports }) {

    const [index, setindex] = useState(0);

    const next = (e) => {
        setindex(index === reports.length - 1 ? 0 : index + 1);
    }

    const prev = (e) => {
        setindex(index === 0 ? reports.length - 1 : index - 1);
    }

    const defineIndex = (index) => {
        return (e) => {
            setindex(index);
        }
    }

    return (
        <section className='reportSlider'>
            <div className='sliderContainer'>
                <div className="content" style={{ transform: `translateX(${-100 * index}vw)` }}>
                    {reports && reports.length > 0 ?
                        reports.map(report => {
                            const { id, title, mainMediaUrl, tags } = report;
                            return (<div key={id} className='sliderContain' style={{ backgroundImage: `url(${mainMediaUrl})` }}>
                                <div className="filter"></div>
                                <div className="info">
                                    <h3>{title}</h3>
                                    <ul>
                                        {tags && tags.length > 0 && tags.map(tag => <li key={tag}>{tag}</li>)}
                                    </ul>
                                </div>
                            </div>)
                        })
                        :
                        <></>
                    }
                </div>
            </div>

            <div className="controls">
                <button onClick={prev}> <ChevronLeftIcon /> </button>
                <button onClick={next}> <ChevronRightIcon /> </button>
                <div className="index">
                    <div className="container">
                        {reports.map((_, i) => <button key={i} className={i === index ? 'active' : ''} onClick={defineIndex(i)}></button>)}

                    </div>
                </div>
            </div>
        </section>
    )
}
