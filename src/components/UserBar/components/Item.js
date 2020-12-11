import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({details: {id, icon, title}, onClick, active}) => {
    let className = '';
    if(active){
        className += 'active';
    }
  return (
        <li id={id} key={id} className={className} onClick={onClick}>
            <FontAwesomeIcon icon={icon} fixedWidth /><a href="/"><h6>{title}</h6></a>
        </li>
  );
};

export default Item;
