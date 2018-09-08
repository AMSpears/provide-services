import React from 'react'
import LogoHeader from '../Img/provide_logo_white-background.png'
import "./Header.css"

const Header = () =>{
    return(
    <nav className = "navbar">
        <a id="logo" href="/"><img src={LogoHeader} width="133px" height="47px" alt="Provide" /></a>
        <ul id ="main-nav">
            <li><a href="#" className ="nav-links" id= "features">Features</a></li>
            <li><a href="#" className= "nav-links" id= "use-cases">Use Cases</a></li>
            <li><a href="#" className= "nav-links" id= "news">News</a></li>
            <li><a href="#" className= "nav-links" id= "provide-network">Provide.network</a></li>
        </ul>
    </nav>
      
    )
}

export default Header