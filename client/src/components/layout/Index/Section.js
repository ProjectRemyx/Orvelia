import React, { Component } from 'react'

export default class Section extends Component {
    render() {
        const { title } = this.props.section
        return (
            <div className="section">
                <h3>{ title }</h3>
            </div>
        )
    }
}
