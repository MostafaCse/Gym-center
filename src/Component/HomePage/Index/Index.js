import React from 'react';
import Choose from '../Choose/Choose';
import DreamComponent from '../DreamComponent/DreamComponent';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TrainProgram from '../TrainProgram/TrainProgram';
import WorkPrinciple from '../WorkPrinciple/WorkPrinciple';

const Index=()=>{

    return(
        <div>
            <Header></Header>
            <WorkPrinciple></WorkPrinciple>
            <DreamComponent></DreamComponent>
            <TrainProgram></TrainProgram>
            <Choose></Choose>
            <Footer></Footer>

        </div>
    )
}
export default Index;