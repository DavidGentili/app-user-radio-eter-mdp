import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { ChevronLeftIcon, ChevronRightIcon } from '@components/Icons';

export default function AllReports({ reports }) {

    const REPORT_PER_PAGE = 8;

    const [page, setPage] = useState(0);
    const [selectedReports, setSelectedReports] = useState(reports.slice(0, REPORT_PER_PAGE))

    const nextPage = (e) => {
        if ((page + 1) * REPORT_PER_PAGE < reports.length)
            setPage(page + 1);
    }

    const prevPage = (e) => {
        if (page > 0)
            setPage(page - 1);
    }
    
    useEffect(() => {
        const base = page * REPORT_PER_PAGE;
        setSelectedReports(reports.slice(base, base + REPORT_PER_PAGE));
    }, [page])


    return (
        <section className='allReportsSection'>
            <div className="reports">
                {selectedReports.map(report => {
                    const { id, mainMediaUrl, title, description } = report
                    return (<div className='report boxContainer' key={id} style={{ backgroundImage: `url(${mainMediaUrl})` }}>
                        <span className='filter'></span>
                        <div className="info">
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <span><Link to={`/informes/${id}`}>Seguir leyendo</Link></span>
                        </div>
                    </div>)
                })}
            </div>
            <div className="controls">
                <button onClick={prevPage}> <ChevronLeftIcon />  </button>
                <p>{page + 1}</p>
                <button onClick={nextPage}> <ChevronRightIcon /> </button>
            </div>
        </section>
    )
}
