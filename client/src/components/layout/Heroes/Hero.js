import React from 'react';

const Hero = (props) =>{
    const { hero } = props;
    return(
        <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
                <div className="card-header text-center">{hero.class}</div>
                <img className="card-img-top" src={hero.avatar} alt="Hero"/>
                <div className="card-body">
                    <h5 className="card-title">{hero.name}</h5>
                    <p className="card-text">{hero.classification}</p>
                </div>
            </div>
        </div>
    )
}

export default Hero