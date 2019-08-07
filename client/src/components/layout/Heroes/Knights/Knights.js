import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from '../../Loading';

import Knight from './Knight';
import Header from './Header';

const Knights = () => {
    let initialState = {
        hero_list: []
    };

    const [state, setState] = useState(initialState);
    const { hero_list } = state;

    useEffect(() => {
        axios
        .get(
            '/api/heroes/knights', { crossdomain: true })
            .then(res => {
                setState({
                    hero_list: res.data,
                    heading: "Knights",
                });
                console.log(res.data);
            })
            .catch(err => console.log(err));
        
    }, []);

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
            <Header/>
                <div className="row results">
                    { hero_list.map(item =>(
                        <Knight key={item.id} knight={item}/>
                    ))}
                </div>
            </React.Fragment>
        );
    }
};

export default Knights;