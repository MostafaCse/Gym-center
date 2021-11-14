import React from 'react';
import './Choose.css';
import chooseInfo from '../../FakeData/Choose';
import ChooseInfo from './ChooseInfo/ChooseInfo';

const Choose = () => {
    return (
        <div style={{ marginBottom: '150px' }}>
            <p className="text-highlight"> <span style={{ color: 'yellow' }}>WHY</span> CHOOSE US</p>
            <div className="row">
                {
                    chooseInfo.map(info => <ChooseInfo info={info} key={info.title}></ChooseInfo>)
                }
            </div>
        </div>
    );
};

export default Choose;