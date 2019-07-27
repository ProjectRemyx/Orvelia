import React, { Component } from 'react'

export default class Trident extends Component {
    render() {
        return (
            <section className="trident">
                <div className="trident-logo-container">
                    <img src={require('../../../imgs/trident_logo.png')} alt="Trident Logo" className="trident-logo"/>
                </div>
                <div className="trident-description">
                    <h2>Trident</h2>
                    <p>
                        If you are looking for a guild and are in the "America" server, consider joining us!
                        We are a midcore guild looking to rise the ranks to reach top spot in both guild 
                        conquest and guild war. If you want to join us on our journey please add me on 
                        Discord (Remyx#1327) and we can discuss further about it. 
                    </p>
                    <h3>Guild Conquest Ranks</h3>
                    <ul>
                        <li>Season 2: 14th</li>
                        <li>Season 3: 18th</li>
                        <li>Season 4: 17th</li>
                        <li>Season 5: 16th (Current)</li>
                    </ul>
                    <h3>Perks</h3>
                    <ul>
                        <li>Dragon / Challenge Raid Carries</li>
                        <li>Friendly and knowledgeable members</li>
                        <li>2x GR Hell clear weekly</li>
                        <li>T8 Scales, Reforge Tokens, UT Fragments</li>
                    </ul>
                    <h3><strong>Requirements</strong></h3>
                    <ul>
                        <li>Guild Conquest ready units (Big DPS/Support)</li>
                        <li>Guild Conquest Participation</li>
                        <li>160 Materials gathered per week</li>
                        <li>Discord</li>
                        <li>Active</li>
                    </ul>
                </div>
            </section>
        )
    }
}
