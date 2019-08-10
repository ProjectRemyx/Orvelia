import React from 'react';
import { Link } from 'react-router-dom';

const Knight = (props) =>{
    const { knight } = props;
    return(
        <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
                <div className="card-header text-center">{knight.class}</div>
                <Link
                    to={`Ratings/Hero/${knight.name}`}
                >
                <img className="card-img-top" src={knight.avatar} alt="Hero"/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link
                        to={`Ratings/Hero/${knight.name}`}
                        >
                            {knight.name}
                        </Link>   
                    </h5>
                    <p className="card-text">{knight.classification}</p>
                </div>
            </div>
        </div>
    )
}

export default Knight