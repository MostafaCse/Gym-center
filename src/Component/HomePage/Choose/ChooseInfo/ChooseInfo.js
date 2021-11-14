import React from 'react';
import './ChooseInfo.css';

const ChooseInfo = (props) => {
    const img = props.info.img
   const title = props.info.title;
    const description = props.info.description;
    return (
        <div className="col-md-4">
            <div className="componentHighlight">
                <img src={img} alt="" />
                <p className="text">{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ChooseInfo;