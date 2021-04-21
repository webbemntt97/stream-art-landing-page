import React from 'react'
import logo from './logo.svg'
import './HeaderNav.css'

export default class HeaderNav extends React.Component {
    render() {
        return (
            <nav id="nav-header">
                <img src={logo} alt={'logo'}/>
                <a href="#">About</a>
                <a href="#">Explore</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
            </nav>
        )
    }
}
