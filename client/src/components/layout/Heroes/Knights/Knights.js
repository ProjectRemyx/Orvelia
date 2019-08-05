import React, { useContext } from 'react';
import { Context } from '../../../../context';
import Loading from '../../Loading';

import Knight from './Knight';
import Header from './Header';

const Heroes = () => {
    const [state] = useContext(Context);
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
            <Header/>
                <h4 className="text-center results">{ heading }</h4>
                <div className="row">
                    { hero_list.map(item =>(
                        <Knight key={item.id} knight={item}/>
                    ))}
                </div>
            </React.Fragment>
        );
    }
};

export default Heroes;