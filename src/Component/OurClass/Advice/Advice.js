import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Advice.css';

const Advice = (props) => {
    const info=props.info;
    return (
        <div>
                <FontAwesomeIcon style={{ color: 'yellow' }} values="this is coo" icon={faCheckSquare}></FontAwesomeIcon>
              <span className="tips-highlight">{info}</span><br /> 
        </div>
    );
};

export default Advice;