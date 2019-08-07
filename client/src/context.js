import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Context = React.createContext();

export function ContextController({ children }){
    let initialState = {
        hero_list: [],
        heading: ''
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        axios
        .get(
            '/api/heroes', { crossdomain:true })
            .then(res =>{
                setState({
                    hero_list: res.data,
                    heading: "All Heroes",
                });
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
}