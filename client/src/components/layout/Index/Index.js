import React, { Component } from 'react'

import Header from '../Index/Header';
import Overview from '../Index/Overview';
import PatchNotes from '../Index/PatchNotes';
import Trident from '../Index/Trident';
import Footer from '../Shared/Footer';

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Overview/>
                <PatchNotes/>
                <Trident/>
                <Footer/>
            </React.Fragment>
        )
    }
}
