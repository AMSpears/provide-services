import React from 'react'
import LogoHeader from '../Img/provide_logo_white-background.png'
import "./Header.css"

const Header = () => {
    return (
        <div className="nav-container">
            <ul id="main-nav">

                <a id="logo" href="/"><img src={LogoHeader} width="283.5px" height="73.5px" alt="Provide" /></a>
                
                <div className="links">
                    <li><a href="#features" className="nav-links">Features</a></li>
                    <li><a href="#use-cases" className="nav-links">Use Cases</a></li>
                    <li><a href="#team" className="nav-links" id="team-link">Team</a></li>
                    <li><a href="https://provide.network/" target="_blank" className="nav-links">Provide.network</a></li>
                </div>
            </ul>
        </div>
    )
}

export default Header