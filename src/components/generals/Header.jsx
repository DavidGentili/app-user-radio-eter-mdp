import React from 'react'
import { NavLink } from 'react-router-dom';


import logoLightBlueAndWhite from '@assets/Isologotipo-lb-w.png';

const Header = () => {
    return (
        <header>
            <img src={logoLightBlueAndWhite} className='brand' alt="" />

            <nav>
                <NavLink to='/'>Inicio</NavLink>
                <NavLink to='informes'>Informes</NavLink>
                <NavLink to='podcast'>Podcast</NavLink>
            </nav>
        </header>

    )
}

export default Header