import React from 'react';
import './StatisticsBox.css'
import icon1 from './Icon1.svg'
import icon2 from './Icon2.svg'
import icon3 from './Icon3.svg'
import icon4 from './Icon4.svg'

class StatisticsBox extends React.Component {
    render() {
        return (
            <div id="statistics-box-container" className="container-fluid">
                <div className="row">
                    <div id="statistics-box-title" className="col-6 justify-content-center">
                        <p>More than 1,000 <br/> unique tours to enjoy!</p>
                    </div>
                    <div className="col-6">

                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-3 d-flex align-items-center">
                                        <img src={icon1}/>
                                    </div>
                                    <div className="col-9">
                                        <div className="row">
                                            <p className="featured-statistic">10</p>
                                        </div>
                                        <div className="row">
                                            <p>Museums & Art Galleries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="row">
                                    <div className="col-3 d-flex align-items-center">
                                        <img src={icon3}/>
                                    </div>
                                    <div className="col-9">
                                        <div className="row">
                                            <p className="featured-statistic">100K</p>
                                        </div>
                                        <div className="row">
                                            <p>Artistic Objects to see</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-3 d-flex align-items-center">
                                        <img src={icon2}/>
                                    </div>
                                    <div className="col-9">
                                        <div className="row">
                                            <p className="featured-statistic">200</p>
                                        </div>
                                        <div className="row">
                                            <p>Exhibitions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="row">
                                    <div className="col-3 d-flex align-items-center">
                                        <img src={icon4}/>
                                    </div>
                                    <div className="col-9">
                                        <div className="row">
                                            <p className="featured-statistic">3</p>
                                        </div>
                                        <div className="row">
                                            <p>Venues</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default StatisticsBox;
