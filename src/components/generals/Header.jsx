import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


import logoLightBlueAndWhite from '@assets/Isologotipo-lb-w.png';
import { CloseIcon, MenuIcon } from '../Icons';

const Header = () => {

    const [expanded, setExpanded] = useState(false);

    const changeState = (e) => {
        setExpanded(!expanded);
    }

    return (
        <header>
            <img src={logoLightBlueAndWhite} className='brand' alt="" />

            <nav className={expanded ? 'expanded' : ''}>
                <NavLink onClick={changeState} to='/'>Inicio</NavLink>
                <NavLink onClick={changeState} to='informes'>Informes</NavLink>
                <NavLink onClick={changeState} to='podcast'>Podcast</NavLink>
            </nav>

            <button onClick={changeState}>{ expanded ? <CloseIcon/> : <MenuIcon/> }</button>
        </header>

    )
}

export default Header