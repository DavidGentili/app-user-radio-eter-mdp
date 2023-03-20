import React from 'react'
import { Link } from 'react-router-dom'
import { NotFoundIcon } from './Icons'

export default function ErrorPage() {
    return (
        <section className='errorPage'>
            <div className="image">
                <NotFoundIcon />
            </div>
            <h2>Opps, no se encontro el contenido que buscaba.</h2>
            <Link to='/'>Volver al inicio</Link>
        </section>
    )
}
