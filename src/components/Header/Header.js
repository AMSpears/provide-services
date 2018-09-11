import React from 'react'
import LogoHeader from '../Img/provide_logo_white-background.png'
import "./Header.css"

const Header = () => {
    return (
        <ul id ="main-nav">      
            <a id="logo" href="/"><img src={LogoHeader} width="133px" height="47px" alt="Provide" /></a>
            <li><a href="#features" className ="nav-links">Features</a></li>
            <li><a href="#use-cases" className= "nav-links">Use Cases</a></li>
            <li><a href="#team" className= "nav-links" id ="team-link">Team</a></li>
            <li><a href="https://provide.network/" target="_blank" className= "nav-links">Provide.network</a></li>
        </ul>  
    )
}

export default Header