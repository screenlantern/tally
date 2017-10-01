import React, { Component } from 'react';
import './Card.scss'

const Card = (props) => {
    return(
        <div className="Card"> 
            <div className="Card__avatar"><img src={props.info.picture.large} alt="avatar" /></div>
            <p className="Card__name">{props.info.name.first}  {props.info.name.last}</p>
            <p className="Card__email">{props.info.email}</p>
            <h6>Joined</h6>
            <p>{props.info.registered}</p>
        </div>
    );
};

export default Card;