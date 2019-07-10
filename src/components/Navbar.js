import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.png';

class Navbar extends Component {
    render() {
        return (
            <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <Link className="navbar-brand logo_h" to="#"><img src={logo} alt="satner-logo" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav justify-content-end">
                                    <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/portofolio">Portofolio</Link></li>
                                    <li className="nav-item submenu dropdown">
                                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Pages</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><Link className="nav-link" to="/">Elements</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/">Portfolio Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Blog</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><Link className="nav-link" to="/">Blog</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navbar;