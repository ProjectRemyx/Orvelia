import React, { useContext } from 'react';
import { Context } from '../../../context';
import Loading from '../Loading';

import Hero from '../Heroes/Hero';
import Header from './Header';

const Heroes = () => {
    const [state] = useContext(Context);
    const { hero_list } = state;

    if(hero_list === undefined){
        return <Loading/>;
    }
    else if(hero_list.length === 0)
    {
        return(
            <React.Fragment>
                <h4 className="text-center error">No heroes found</h4>
            </React.Fragment>
        );
    }
    else{
        return(
            <React.Fragment>
            <Header/>
                <div className="row results">
                    { hero_list.map(item =>(
                        <Hero key={item.id} hero={item}/>
                    ))}
                </div>
            </React.Fragment>
        );
    }
};

export default Heroes;