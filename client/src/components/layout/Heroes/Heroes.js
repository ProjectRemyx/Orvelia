import React, { Component } from 'react';
import { Context } from '../../../context';
import Loading from '../Loading';

import Hero from '../Heroes/Hero';

const Heroes = () => {
    const [state] = useContext(COntext);
    const { hero_list, heading } = state;

    if(hero_list === undefined){
        return <Loading/>;
    }
    else if(hero_list.length === 0)
    {
        return(
            <React.Fragment>
                <h4 className="text-center">No heroes found</h4>
            </React.Fragment>
        );
    }
    else{
        return(
            <React.Fragment>
                <h4 className="text-center results">{ heading }</h4>
                <div className="row">
                    { hero_list.map(item =>(
                        <Hero key={item.id} hero={item}/>
                    ))}
                </div>
            </React.Fragment>
        );
    }
};

export default Heroes;