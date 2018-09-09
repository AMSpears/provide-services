import React from 'react'
import LogoHeader from '../Img/provide_logo_white-background.png'
import "./Header.css"

const Header = () => {
    return (
        <ul id ="main-nav">      
            <a id="logo" href="/"><img src={LogoHeader} width="133px" height="47px" alt="Provide" /></a>
            <li><a href="#" className ="nav-links">Features</a></li>
            <li><a href="#" className= "nav-links">Use Cases</a></li>
            <li><a href="#" className= "nav-links">News</a></li>
            <li><a href="#" className= "nav-links">Provide.network</a></li>
        </ul>  
    )
}

export default Header