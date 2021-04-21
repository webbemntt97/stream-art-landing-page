import React from 'react';
import './HowItWorks.css'
import step1 from './step1.svg'
import step2 from './step2.svg'
import step3 from './step3.svg'

class HowItWorks extends React.Component {
    render() {
        return (
            <div id="how-it-work-container" className="container-fluid">
                <div id="how-it-work-head" className="row d-flex justify-content-center">
                    <p>How It Works</p>
                </div>
                <div id="step-boxes" className="row d-flex justify-content-center">
                    <div className="step-box">
                        <div className="row justify-content-center">
                            <img src={step1}/>
                        </div>
                        <div id="step-title" className="row justify-content-center">
                            <p>Book</p>
                        </div>
                        <div className="row justify-content-center">
                            <p>Book your favourite cultural event</p>
                        </div>
                    </div>
                    <div className="step-box">
                        <div className="row justify-content-center">
                            <img src={step2}/>
                        </div>
                        <div id="step-title" className="row justify-content-center">
                            <p>Join</p>
                        </div>
                        <div className="row justify-content-center">
                            <p>Join the virtual tour from wherever you are</p>
                        </div>
                    </div>
                    <div className="step-box">
                        <div className="row justify-content-center">
                            <img src={step3}/>
                        </div>
                        <div id="step-title" className="row justify-content-center">
                            <p>Interact</p>
                        </div>
                        <div className="row justify-content-center">
                            <p>Ask our professional guides everything!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowItWorks;
