import { faCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import PricingDeatils from '../../FakeData/PricingDetails';
import Footer from '../../HomePage/Footer/Footer';
import HeaderMain from '../../HomePage/Header/HeaderMain/HeaderMain';
import PricingBodyPartital from '../PricingBodyPartital/PricingBodyPartital';
import './PricingBody.css';

const PricingBody = () => {

    const [Pricing, setPricing] = useState("PRICING PLANS");
    const [StateMangement, setStateMangement] = useState(true);

    const btnHandle = (props) => {
        setPricing(props);
        setStateMangement(false);
    }

    return (
        <div>
            <div style={{ marginBottom: '100px' }} className="hederHighlight">
                <HeaderMain></HeaderMain>
            <h1 className="titleHighlight">{Pricing}</h1>
            </div>
            {
                StateMangement && <div style={{ marginBottom: '100px' }}>
                    <p className="textHighlight"><span style={{ color: 'yellow' }}>CHOOSE THE OFFERS</span> THAT SUITS YOU</p>
                    <center> <p>you can choose thats offer which is suitable for you. it is also ready for those who are agree to attend in the gym.</p></center>
                    <div style={{ marginTop: '50px' }} className="row">
                            {
                                PricingDeatils.map(info => <div className="col-md-4" >
                                    <div className="bg-highlight" style={{paddingTop: '30px',backgroundImage:`url(${info.bg})`}}>
                              <p style={{ color: 'yellow', fontWeight: '600' }}>{info.billed}</p>
                                <h2 style={{ color: 'white', fontWeight: '600' }}>{info.plan}</h2>
                                <h1 style={{ color: 'yellow', fontWeight: '700' }}><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>{info.doller}</h1>
                                {
                                    info.details.map(details=><p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>{details}</p>)
                                }
                                  <button onClick={() => btnHandle('YOUR GYM MEMBERSHIP')} id="btn-highlight">PURCHASE</button>
                                  </div>
                                </div>)
                            }
                    </div>
                </div>
            }
            {
                !StateMangement && <PricingBodyPartital></PricingBodyPartital>
            }
            <Footer></Footer>
        </div>
    )
}
export default PricingBody;