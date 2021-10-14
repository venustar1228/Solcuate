import React, { useState, useEffect } from 'react'
import { Link as LinkS } from 'react-scroll';
import { Link as Rlink } from 'react-router-dom'
import './Navbar.css'
import { makeStyles } from '@material-ui/core'
import Home from '../Home';


function Navbar() {
    const [navbar, setNavbar] = useState(false)

    const changeBakground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBakground);
    return (
        <>
            <div className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container container">
                    <div className='logo'>
                        <Rlink to='/' className='nav-links'>
                            <img src="images/logo.png" alt='logo' className='img_logo' />
                            <text className="solcuate">SOLCUATE</text>
                        </Rlink>
                    </div>
                    <ul className='nav-menu'>
                        <li className="nav-item">
                            <LinkS className='nav-links'
                                activeClass="active"
                                to="intro"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>
                                <text>Home</text>
                            </LinkS>
                        </li>
                        <li className="nav-item">
                            <LinkS className='nav-links'
                                activeClass="active"
                                to="rarity"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>
                                Rarity
                            </LinkS>
                        </li>
                        <li className="nav-item">
                            <LinkS className='nav-links'
                                activeClass="active"
                                to="roadmap"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>
                                Roadmap
                            </LinkS>
                        </li>
                        <li className="nav-item">
                            <Rlink to='twitter' className='nav-links'>
                                Twitter
                            </Rlink>
                        </li>
                        <li className="nav-item">
                            <Rlink to='discord' className='nav-links'>
                                Discord
                            </Rlink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar