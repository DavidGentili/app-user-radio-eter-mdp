import React from 'react'

import logoLightBlueAndWhite from '../../../assets/Isologotipo-lb-w.png';

import './header.css';

const Header = () => {
  return (
    <nav>
        <img src={logoLightBlueAndWhite} className='brand' alt="" />
    </nav>
  )
}

export default Header