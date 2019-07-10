import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="footer_top flex-column">
                                <div className="footer_logo">
                                    <Link to="#">
                                        <img src={logo} alt="satner-logo" />
                                    </Link>
                                    <h4>Follow Me</h4>
                                </div>
                                <div className="footer_social">
                                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                    <Link to="#"><i className="fa fa-dribbble"></i></Link>
                                    <Link to="#"><i className="fa fa-behance"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;