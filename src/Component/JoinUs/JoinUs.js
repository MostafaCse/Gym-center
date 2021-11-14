import React from 'react';
import { useNavigate } from 'react-router';
import './JoinUs.css';

const JoinUs = () => {
  let navigate = useNavigate();
    const joinUsHandle=()=>{
    navigate('/joinUs');
    }
    return (
        <div className="joinUs">
            <span id="title-highlight">THE BEST FITNESS <br></br> STUDIO IN  TOWN</span>
            <p id="paragraph-highlight">it is one the most powerful gym center in this town.we donot<br></br> only all type of instrument but also have experience trainer. <br></br>we also provide outstanding enviroment and we are all <br></br> friendly.here we can express ur all opinion </p>
            <button onClick={joinUsHandle} id="Button-highlight">JOIN US</button>
        </div>
    );
};

export default JoinUs;