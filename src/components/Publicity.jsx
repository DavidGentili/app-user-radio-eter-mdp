import React from 'react'

const Publicity = ({ publicity, loading }) => {
    return (
        <div className={`publicityImage boxContainer ${loading && 'loading'}`}>
            { publicity && 
                <a href={publicity.link}>
                    <img className='publicityImage' src={publicity.urlImage} alt={publicity.altText || 'Radio Eter Mdp'} loading='lazy' />
                </a>
            }
        </div>
    )
}

export default Publicity