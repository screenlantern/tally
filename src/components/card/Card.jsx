import React, { Component } from 'react';
import './Card.scss'

const Card = (props) => {
    return(
        <div className="Card"> 
            <div className="Card__avatar"><img src={props.info.picture.large} alt="avatar" /></div>
            <p className="Card__name">{props.info.name.first}&nbsp;{props.info.name.last}</p>
            <p className="Card__email">{props.info.email}</p>
            <h5>Joined</h5>
            <p>{props.reg}</p>
        </div>
    );
};

export default Card;