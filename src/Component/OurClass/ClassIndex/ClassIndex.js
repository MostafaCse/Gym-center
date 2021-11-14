import React, { useState } from 'react';
import Footer from '../../HomePage/Footer/Footer';
import classComponent from '../../../Image/class-component.jpg';
import './ClassIndex.css';
import { useNavigate } from 'react-router';
import ClassAdvice from '../../FakeData/ClassAdvice';
import Advice from '../Advice/Advice';
import Schedule from '../../FakeData/Schedule';
import Calendar from '../Calendar/Calendar';
import HeaderMain from '../../HomePage/Header/HeaderMain/HeaderMain';

const ClassIndex = () => {
  const pharagraph = 'As the largest Wikipedia edition, and because English is such a widely used language, the English Wikipedia draws many users and editors whose native language is not English. Such users may seek information from the English Wikipedia rather than the Wikipedia of their native language because the English Wikipedia tends to contain more information about general subjects. Often bringing in new perspectives, a strong motivation to contribute for them is to increase the coverage of topics outside the English world for an international audience and to enrich existing topics with missing information from non-English countries, thereby helping to reduce systemic bias. Successful collaborations have been developed between non-native English speakers who successfully add content to the English Wikipedia and native English speakers who act as copy editors for them.';

  const [titleSet, SettitleSet] = useState("OUR CLASSES");
  const [showComponent, setShowComponent] = useState(true);


  const btnHandle = (props) => {
    SettitleSet(props);
    setShowComponent(false);
  }

  const navigate=useNavigate();

  const joinUsHandle = () => {
    //history.push("/joinUs");
    navigate('/JoinUs');
  }
  return (
    <div>
      <div style={{ marginBottom: '100px' }} className="hederHighlight">
        <HeaderMain></HeaderMain>
        <p className="titleHighlight">{titleSet}</p>
      </div>
      {
        showComponent && <div>
          <div style={{ marginBottom: '150px' }} className="row">
            <div className="col-md-4">
              <div className="image-position" id="pysco">
                <button onClick={() => btnHandle("PSYCHO TRAINING")} className="btn-position">PSYCHO TRAINING</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-position" id="self">
                <button onClick={() => btnHandle("SELF-DEFENSE")} className="btn-position">SELF-DEFENSE</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-position" id="advance">
                <button onClick={() => btnHandle("ADVANCED GYM")} className="btn-position">ADVANCED GYM</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-position" id="cardio-male">
                <button onClick={() => btnHandle("CARDIO TRAINING")} className="btn-position">CARDIO TRAINING</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-position" id="strength">
                <button onClick={() => btnHandle("STRENGTH TRAINING")} className="btn-position">STRENGTH TRAINING</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-position" id="pysco-female">
                <button onClick={() => btnHandle("PSYCHO TRAINING")} className="btn-position">PSYCHO TRAINING</button>
              </div>
            </div>
          </div>
        </div>
      }
      {
        !showComponent && <div style={{ marginBottom: '100px' }}>
          <div className="row">
            <div style={{ marginBottom: '40px' }} className="col-md-7 img-highlight">
              <img src={classComponent} alt="" />
            </div>
            <div className="col-md-5">
              <p style={{ fontSize: '30px', fontWeight: 'bold' }}><span style={{ color: 'yellow' }}>CLASS</span> SCHEDULE</p>
              <div className="row">
                {
                  Schedule.map(info => <Calendar key={info.time} info={info}></Calendar>)
                }
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <p>{pharagraph}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-10">
              {
                ClassAdvice.map(info => <Advice key={info} info={info}></Advice>)
              }
            </div>
            <div className="col-md-2">
              <button onClick={joinUsHandle} className="btnHighlight">JOIN US</button>
            </div>
          </div>
        </div>
      }
      <Footer></Footer>
    </div>
  )
}
export default ClassIndex;