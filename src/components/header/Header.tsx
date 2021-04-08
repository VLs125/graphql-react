import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul className='navbar'>
                    <li className='navbar-element'>
                        <NavLink to="/">
                            HOME
                        </NavLink>
                    </li>
                    <li className='navbar-element' >
                        <NavLink to="/about">
                            ABOUT
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header