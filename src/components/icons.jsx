import React, { Component } from 'react';
import sprite from '../images/sprite.svg';

const Icons = (props) => {
    const icon_id = props.icon_id;
    const icons = ["#home"];
    return ( 
        <svg className="icon" fill="current">
            <use href={sprite + icons[icon_id]}></use>
        </svg>
     );
}
 
export default Icons;