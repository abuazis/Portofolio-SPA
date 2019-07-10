import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AboutImage from '../../assets/img/about-us.png';

class _About extends Component {
    render() {
        return (
            <section className="about_area section_gap">
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-lg-5">
                            <div className="about_img">
                                <img src={AboutImage} alt="illustration" />
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-5">
                            <div className="main_title text-left">
                                <h2>let's<br />
                                    Introduce about<br />
                                    myself
                                </h2>
                                <p>
                                    Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven
                                    midst their. Beast creepeth. Fish days.
						        </p>
                                <p>
                                    Is give may shall likeness made yielding spirit a itself together created after sea
                                    is in beast beginning signs open god you're gathering whose gathered cattle let.
                                    Creature whales fruit unto meat the life beginning all in under give two.
						        </p>
                                <Link className="primary_btn" to="#"><span>Download CV</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default _About;