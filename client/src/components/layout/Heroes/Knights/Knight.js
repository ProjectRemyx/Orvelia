import React from 'react';


const Knight = (props) =>{
    const { knight } = props;
    return(
        <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
                <div className="card-header text-center">{knight.class}</div>
                <img className="card-img-top" src={knight.avatar} alt="Hero"/>
                <div className="card-body">
                    <h5 className="card-title">{knight.name}</h5>
                    <p className="card-text">{knight.classification}</p>
                </div>
            </div>
        </div>
    )
}

export default Knight