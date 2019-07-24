import React, { Component } from 'react'

export default class Section extends Component {
    render() {
        const { img, title, description, button} = this.props.section
        return (
            <div className="section">
                <img src= { img }/>
                <h3>{ title }</h3>
                <p>{ description }</p>
                <button>{ button }</button>
            </div>
        )
    }
}
