import React, { Component } from 'react';

import Banner from './_Banner';
import About from './_About';

class Home extends Component {
    render() {
        return (
            <div className="wrapper-home">
                <Banner />
                <About />
            </div>
        );
    }
}

export default Home;