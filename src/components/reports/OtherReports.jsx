import React from 'react'
import { Link } from 'react-router-dom';

export default function OtherReports({ reports }) {




    return (
        <section className='otherReports'>
            {
                reports.map(report => {
                    const { id, title, description, mainMediaUrl } = report;
                    return <article key={id} className='report boxContainer'>
                        <div className="image" style={{ backgroundImage: `url(${mainMediaUrl})` }}></div>
                        <div className="info">
                            <h4>{title}</h4>
                            <p>{description}</p>
                            <Link to={`/informes/${id}`}>Seguir leyendo</Link>
                        </div>
                    </article>
                })
            }
        </section>
    )
}
