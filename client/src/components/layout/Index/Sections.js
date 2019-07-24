import React, { Component } from 'react'
import Section from './Section';

export default class Sections extends Component {
    render() {
        return this.props.sections.map((section) => (
            <Section key = { section.id } section = { section }/>
        ));
    }
}
