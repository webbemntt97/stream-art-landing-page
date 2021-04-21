import './App.css';
import Hero from "./components/hero/Hero";
import WaveDiv from "./components/wave-div/WaveDiv";
import React from "react";
import HowItWorks from "./components/how-it-works/HowItWorks";
import StatisticsBox from "./components/statistics-box/StatisticsBox";
import HeaderNav from "./components/header-nav/HeaderNav";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderNav />
                <Hero/>
                <WaveDiv/>
                <HowItWorks />
                <StatisticsBox />
            </div>
        )
    }
}

