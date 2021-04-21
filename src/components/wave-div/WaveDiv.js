import React from 'react';
import './WaveDiv.css'
import divider from './divider.svg'

class WaveDiv extends React.Component {
    render() {
        return (
            <img id="wave-divider" src={divider}/>
        )
    }
}

export default WaveDiv;
