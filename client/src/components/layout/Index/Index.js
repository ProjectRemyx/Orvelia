import React, { Component } from 'react'

import Header from '../Index/Header';
import Overview from '../Index/Overview';
import PatchNotes from '../Index/PatchNotes';

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Overview/>
                <PatchNotes/>
            </React.Fragment>
        )
    }
}
