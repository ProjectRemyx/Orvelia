import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header-bg">
                <div className="header-img">
                    <img src={require('../../imgs/trident_logo.png')} style={{ maxWidth: "300px" }} alt="KR Character"/>
                </div>
            </div>
        )
    }
}
