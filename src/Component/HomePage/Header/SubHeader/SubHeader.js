import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import './SubHeader.css';
const SubHeader = (props) => {
    return (
        <div className="hederHighlight">
            <HeaderMain></HeaderMain>
            <h1 id="titleItem">{props.title}</h1>
        </div>
    );
};

export default SubHeader;