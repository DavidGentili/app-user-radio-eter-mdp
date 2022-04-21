import React from 'react'

import logotipoWhite from '../../../assets/logotipo-w.png';
import isologotipoBlack from '../../../assets/isologotipo-b-w.png'

import './header.css';

const Header = () => {
  return (
    <nav>
        <img src={isologotipoBlack} className='brand isologotipo' alt="" />
        <img src={logotipoWhite} className='brand logotipo' alt="Radio Eter MDP" />
    </nav>
  )
}

export default Header