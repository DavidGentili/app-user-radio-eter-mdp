import React from 'react'

export default function SingleReportMain({ report }) {


    const { title, mainMediaUrl, content, tags } = report

    return (
        <section className='singleReportMain'>
            <article className='mainMedia' style={{ backgroundImage: `url(${mainMediaUrl})` }}> <div className="filter"></div> </article>
            <article className="content boxContainer">
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="contentBody" dangerouslySetInnerHTML={{ __html: content }}></div>
                <div className="tags">
                    <ul>
                        {tags && tags.length > 0 && tags.map(tag => <li key={tag}>#{tag}</li>)}
                    </ul>
                </div>
            </article>
        </section>

    )
}
