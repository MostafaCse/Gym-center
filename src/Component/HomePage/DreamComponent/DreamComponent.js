import React from 'react';
import dreamImage from './../../../Image/dreamComponent.jpg';

const DreamComponent = () => {
    return (
        <div  className="row">
            <div className="col-md-6">
            <img style={{width:'80%'}} className="img-fluid" src={dreamImage} alt="" />
            </div>

            <div className="col-md-6">
                <div style={{paddingTop: '20px',paddingRight:'5%' }}>
                    <h1>ABOUT US</h1>
                    <h1 style={{ color: 'yellow' }}> WE ARE HERE TO DREAM!</h1>
                    <h1>OUR TEAM IS HERE SURVE YOU</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sapiente dolorem ratione asperiores suscipit ex hic laboriosam debitis nesciunt eveniet quos maiores reiciendis, iste sequi veritatis, incidunt nostrum nam commodi consequuntur vitae adipisci illum? Deleniti provident quas illo recusandae sint?</p>
                </div>
            </div>
        </div>
    );
};

export default DreamComponent;