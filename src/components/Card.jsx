import React from "react";

import propTypes from 'prop-types';


const Card = ({img, description,autor}) => {

    return (
        <div className="col">
            <div className=" card">

                <img src={img}
                    className="card-img-top"
                    alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><span>created by: {autor}</span></h5>
                    <p className="card-text">{description}</p>
                </div>

            </div>

        </div>
    );
};
Card.propTypes = {
    img: propTypes.string
};
export default Card;
