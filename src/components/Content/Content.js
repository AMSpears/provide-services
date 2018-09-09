import React from 'react'
import Logo from '../Img/provide_logo_dark-blue.png'
import './Content.css'

const Content = () => {
    return (
        <div>
            <section className ="intro">
            <img id = "intro-logo" src= {Logo} alt = "Provide Services"/>
            <h1>Loren ipsum dolor sit amet consectetur</h1>
            <p>Loren ipsum dolor sit amet, consectetur adipiscing elit sed do eiurmud tempor incididunt</p>
            <a href= "#"><button id= "sign-up"> Sign Up</button></a>
            </section>

        </div>
    )
}

export default Content