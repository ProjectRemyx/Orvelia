import React, { Component } from 'react'

import Sections from './Sections';

export default class Overview extends Component {
    state = {
        sections: [
            {
                id: 1,
                title: 'Hero Builds',
                img: 'link',
                description: 'Lorem ipsum',
                button: 'More Details'
            },
            {
                id: 2,
                title: 'Equipment Info',
                img: 'link',
                description: 'Lorem ipsum',
                button: 'More Details'
            },
            {
                id: 3,
                title: 'World Boss Strats',
                img: 'link',
                description: 'Lorem ipsum',
                button: 'More Details'
            },
            {
                id: 4,
                title: 'Conquest Guides',
                img: 'link',
                description: 'Lorem ipsum',
                button: 'More Details'
            }
        ]
    }
    render() {
        return (
            <div className="overview-section">
                <div className="overview-section-intro">
                    <h1><strong>Orvelia</strong></h1>
                    <img src={require('../../../imgs/divider5.png')} style={{ maxWidth: '200px', marginTop: '-2.8em' }}alt="Divider"/>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type.
                    </p>
                </div>
                <div className="overview-section-details">
                    <Sections sections = { this.state.sections }/>
                </div>
            </div>
        )
    }
}
