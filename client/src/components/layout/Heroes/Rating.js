import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from '../Loading';

const Rating = props => {
    const [name, setName] = useState({});
    const [heroClass, setClass] = useState({});
    const [type, setType] = useState({});
    const [classification, setClassification] = useState({});
    const [rating, setRating] = useState({});

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
                    let heroClass = res.data.classification;
                    setClass({ heroClass });
                })
                .then(res => {
                    let type = res.data.type;
                    setType({ type });
                })
                .then(res => {
                    let classification = res.data.classification;
                    setClassification({ classification });
                })
                .then(res => {
                    let rating = res.data.rating;
                    setRating({ rating });
                })
                .catch(err => console.log(err));
    }, [props.match.params.name]);

    const info = [name, heroClass, type, classification, rating];
    for(let i = 0; i < info.length; i++)
    {
        if(info[i] === undefined || Object.keys(info[i]).length === 0)
        {
            return <Loading/>;
        }
        else
        {
            return(
                <Link to="/Heroes">
                    Back to hero list
                </Link>
            );
        }
    }
};

export default Rating;