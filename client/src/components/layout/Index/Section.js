import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Section extends Component {
    render() {
        const { img, title, description, button} = this.props.section
        return (
            <div className="section">
                <img src= {img} alt="Hero Builds"/>
                <h3>{ title }</h3>
                <p>{ description }</p>
                <Link to="#">
                    <button className="arrow">{ button }</button>
                </Link>
            </div>
        )
    }
}
