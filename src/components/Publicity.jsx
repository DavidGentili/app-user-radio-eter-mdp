import React from 'react'

const Publicity = ({ publicity }) => {
  return (
    <div className="publicityImage boxContainer">
        { publicity && 
            <a href={publicity.link}>
                <img className='publicityImage' src={publicity.urlImage} alt={publicity.altText || 'Radio Eter Mdp'} />
            </a>
        }
    </div>
  )
}

export default Publicity