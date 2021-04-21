import React from 'react';
import './Hero.css'
import illustration from './zombieing.svg'

class Hero extends React.Component {
    render() {
        return (
            <div id="hero-container" className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div id="hero-content">
                            <p className="hero-title">Stream the<br/> Culture!</p>
                            <p className="hero-slogan">Your new way to explore the world!
                                <br/>
                                Discover the best cultural digital experience, <br/>
                                made by humans for humans</p>
                            <button type="button" className="hero-cta btn btn-primary"> Start your journey!</button>
                        </div>
                    </div>

                    <div className="col-6">
                        <img src={illustration}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;
