import React from 'react'
import LogoHeader from '../Img/Presskit/provide-logo-white-background.png'
import "./Header.css"

const Header = () => {
    return (
       <div className="nav-container">
            <ul id="main-nav">
                <a id="logo" href="/"><img src={LogoHeader} width="215px" height="70px" alt="Provide" /></a>
                <div className="links">
                    <li><a href="#platform" className ="nav-links">Platform</a></li>
                    <li><a href="#use-cases" className= "nav-links">Use Cases</a></li>
                    <li><a href="#team" className= "nav-links" id ="team-link">Team</a></li>
                    <li><a href="https://console.provide.services" target="_blank" className= "nav-links">Console</a></li>
                    <li><a href="#contact" className= "nav-links">Contact Us</a></li>
                </div>
            </ul>
        </div>
        
    )
}

export default Header
