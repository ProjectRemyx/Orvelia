import React, { Component } from 'react'

import Header from '../Index/Header';
import Overview from '../Index/Overview';

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Overview/>
            </React.Fragment>
        )
    }
}
