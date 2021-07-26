import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// This exports the whole icon packs for Brand and Solid.
library.add(fab, fas)

const Button = props => {
    
    return (
        <button className="btn btn-secondary button" id={props.id} title={props.title} onClick={props.onClick}>
            <FontAwesomeIcon icon={[`${props.icon.split(" ")[0]}`, `${props.icon.split(" ")[1]}`]} />
            {props.children}
        </button>
    )
};

export default Button;