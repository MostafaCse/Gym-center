import React from 'react';
import './NotFound.css';
import notFound from '../../Image/404-whoops.gif'
const NotFound = () => {

    return (
        <div className="notfoundHighlight">
            <img className="img-fluid imageHighlight" src={notFound} alt="" />
            <h1>INVALID URL!</h1>
            <h2>try again with valid address</h2>
        </div>
    )
}
export default NotFound;