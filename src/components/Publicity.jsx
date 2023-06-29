import React from 'react'

const Publicity = ({ publicity, loading }) => {
    return (
        <div className={`publicity boxContainer ${loading ? 'loading' : ''}`}>
            { publicity && 
                <a href={publicity.link}>
                    <img className='' src={publicity.urlImage} alt={publicity.altText || 'Radio Eter Mdp'} loading='lazy' />
                </a>
            }
        </div>
    )
}

export default Publicity