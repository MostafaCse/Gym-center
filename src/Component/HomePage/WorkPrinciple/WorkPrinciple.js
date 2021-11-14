import React from 'react';
import './WorkPrinciple.css';
import progression from './../../../Image/progression-p.png';
import nutrition from './../../../Image/nutrution-p.png';
import workout from './../../../Image/workout-p.png';

const WorkPrinciple = () => {
  return (
    <div>

      <div className="row row-highlight">
        <div className="col-md-4">

          <div id="progession">
            <div className="component-highlight">
              <img src={progression} alt="" />
              <h1>PROGRESSION</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum tempore velit temporibus ut molestiae exercitationem ex officiis officia explicabo.</p>

            </div>
          </div>
        </div>

        <div className="col-md-4">

          <div id="workout" >
            <div className="component-highlight">
              <img src={workout} alt="" />
              <h1 style={{ color: 'yellow' }}>WORK OUT</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum tempore velit temporibus ut molestiae exercitationem ex officiis officia explicabo.</p>
            </div>

          </div>
        </div>

        <div className="col-md-4">

          <div id="nutrition" >
            <div className="component-highlight">
              <img src={nutrition} alt="" />
              <h1>NUTRITION</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum tempore velit temporibus ut molestiae exercitationem ex officiis officia explicabo.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkPrinciple;