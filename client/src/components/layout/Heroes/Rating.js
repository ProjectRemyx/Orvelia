import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from '../Loading';

const Rating = props => {
    const [name, setName] = useState({});
    const [heroClass, setClass] = useState({});

    useEffect(() => {
        axios
            .get(
                `/api/heroes/${props.match.params.name}`
                )
                .then(res =>{
                    let name = res.data.name;
                    setName({ name });

                    return axios.get(
                        `/api/heroes/${props.match.params.name}`
                    );
                })
                .then(res => {
                    let heroClass = res.data.class;
                    setClass({ heroClass });
                })
                .catch(err => console.log(err));
    }, [props.match.params.name]);

    const info = [name, heroClass];
    for(let i = 0; i < info.length; i++)
    {
        if(info[i] === undefined || Object.keys(info[i]).length === 0)
        {
            return <Loading/>;
        }
        else
        {
            return(
                <React.Fragment>
                    <Link to="/Heroes">
                        Back to hero list
                    </Link>
                    <div className="card">
                        <h5 className="card-header">
                          { name.name }
                          <span>{heroClass.heroClass}</span>
                        </h5>
                    </div>
                </React.Fragment>
            );
        }
    }
};

export default Rating;