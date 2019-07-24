import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header-bg">
                <div className="header-img">
                    <img src={require('../../../imgs/zafir_basic.png')} style={{ maxWidth: "400px" }} alt="KR Character"/>
                </div>
            </div>
        )
    }
}
