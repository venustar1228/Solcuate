import React from 'react'
import { Link as LinkS } from 'react-scroll';
import { Link as Rlink } from 'react-router-dom'
import './Navbar.css'
import { makeStyles } from '@material-ui/core'
import Home from '../Home';


function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Rlink to='/' className='nav-links'>
                        SOLCUATE
                    </Rlink>
                    <ul className='nav-menu'>
                        <li className="nav-item">
                            <LinkS className='nav-links'
                                activeClass="active"
                                to="intro"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>
                                Home
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