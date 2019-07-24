import React, { Component } from 'react'

import Sections from './Sections';

export default class Overview extends Component {
    state = {
        sections: [
            {
                id: 1,
                title: 'Hero Builds',
                img: require('../../../imgs/builds.PNG'),
                description: 'Not sure where to start in building your hero? We got you. Here you will find the most up to date builds and comprehensive guide to your favorite heroes',
                button: 'More Details'
            },
            {
                id: 2,
                title: 'Equipment Info',
                img: require('../../../imgs/equipment.PNG'),
                description: "Looking for information on specific hero UW and UTs? You've come to the right place. We provide all information including ideal UTs and tier list details for each one",
                button: 'More Details'
            },
            {
                id: 3,
                title: 'World Boss',
                img: require('../../../imgs/wb.PNG'),
                description: "Need help planning your world boss teams? Unsure of where to start? This section will tell you all you need to know about team compositions and mechanics.",
                button: 'More Details'
            },
            {
                id: 4,
                title: 'Conquest Guides',
                img: require('../../../imgs/gc.PNG'),
                description: 'Want to bring your guild to new heights? We can help you do just that. This section contains information such as ideal team compositions and boss mechanics.',
                button: 'More Details'
            }
        ]
    }
    render() {
        return (
            <div className="overview-section">
                <div className="overview-section-intro">
                    <h1>Orvelia</h1>
                    <img src={require('../../../imgs/divider5.png')} style={{ maxWidth: '200px', marginTop: '-2.8em' }}alt="Divider"/>
                    <p>
                        Orvelia is a King's Raid toolkit / guide website made by Remyx (NA). 
                        For inquiries you can reach me on Discord at Remyx#1327. The goal of
                        Orvelia is to provide a centralized area for game information that
                        the wiki site or other fan made sites do no contain. This application
                        is made in MERN and uses it's own API. I am always open to feedback and 
                        criticism. If you have any suggestions on how to improve Orvelia, please 
                        do not hesitate to contact me.  
                    </p>
                </div>
                <div className="overview-section-details">
                    <Sections sections = { this.state.sections }/>
                </div>
            </div>
        )
    }
}
