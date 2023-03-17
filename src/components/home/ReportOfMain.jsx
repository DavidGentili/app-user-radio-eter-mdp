import React from 'react'
import { Link } from 'react-router-dom'

export default function ReportofMain({ report }) {

    const { id, title, mainMediaUrl, description } = report


    return (
        <div className='report boxContainer' style={{ backgroundImage: `url(${mainMediaUrl})` }}>
            <span className='filter'></span>
            <div className="info">
                <h3>{title}</h3>
                <span><Link to={`/informes/${id}`}>Seguir leyendo</Link></span>
            </div>
        </div>
    )
}
