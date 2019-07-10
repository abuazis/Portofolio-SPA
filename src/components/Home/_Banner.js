import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HomeRight from '../../assets/img/banner/home-right.png';

function MyName(props) {
    return <h1 className="text-uppercase">I am {props.name}</h1>
}

function MyJob(props) {
    return <h5 className="text-uppercase">{props.job}</h5>
}

class _Banner extends Component {
    render() {
        return (
            <section className="home_banner_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner_content">
                                    <h3 className="text-uppercase">Hell0</h3>
                                    <MyName name="Abu Azis" />
                                    <MyJob job="full-stack & android developer" />
                                    <div className="d-flex align-items-center">
                                        <Link className="primary_btn" to="#"><span>Hire Me</span></Link>
                                        <Link className="primary_btn tr-bg" to="#"><span>Get CV</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="home_right_img">
                                    <img src={HomeRight} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default _Banner;