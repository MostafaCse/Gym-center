import React from 'react';
import './Calendar.css';
const Calendar = (props) => {
    const day=props.info.day;
    const time=props.info.time;
    return (
        <div className="col-md-5 schedule">
            <h4>{day}</h4>
            <p style={{ color: 'yellow' }}>{time}</p>
        </div>
    );
};

export default Calendar;