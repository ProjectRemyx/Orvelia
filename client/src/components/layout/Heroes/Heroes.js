import React, { Component } from 'react';
import { Context } from '../../../context';

const Heroes = () => {
    const [state] = useContext(COntext);
    const { hero_list, heading } = state;


};

export default Heroes;