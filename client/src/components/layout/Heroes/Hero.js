import React from 'react';
import { Link } from 'react-router-dom';


const Hero = (props) =>{
    const { hero } = props;
    return(
        <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
                <div className="card-header text-center">{hero.class}</div>
                <Link
                    to={`Ratings/Hero/${hero.name}`}
                >
                    <img className="card-img-top" src={hero.avatar} style={{ maxHeight: '410px' }}alt="Hero"/>    
                </Link>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link
                            to={`Ratings/Hero/${hero.name}`}
                        >
                            {hero.name}
                        </Link>
                    </h5>
                    <p className="card-text">{hero.classification}</p>
                </div>
            </div>
        </div>
    )
}

export default Hero