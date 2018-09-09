import React from 'react'
import Logo from '../Img/provide_logo_dark-blue.png'
import FeatureItem from "../Img/noun_Network_27392.png"
import './Content.css'

const Content = () => {
    return (
        <div>
            <section className ="intro">
                <img id = "intro-logo" src= {Logo} alt = "Provide Services"/>
                <h1 id= "intro-header">Loren ipsum dolor sit amet consectetur</h1>
                <p id= "intro-details">Loren ipsum dolor sit amet, consectetur adipiscing elit sed do eiurmud tempor incididunt</p>
                <a href= "#"><button id= "sign-up"> Sign Up</button></a>
            </section>
            <section className ="feature-section">
                <h1 id= "feature-header">Lorem ipsum dolor sit amet consectetur</h1>
                <p id= "feature-details">Loren ipsum dolor sit amet, consectetur adipiscing elit sed do eiurmud tempor incididunt</p>
              <div className= "feature-items-container">
                <div>
                    <img className= "feature-item-img" src ={FeatureItem} alt= "Feature item"/>
                    <h2 className= "feature-item-title">Feature</h2>
                    <p className = "feature-item-details">Loren ipsum dolor sit amet, consectetur adipiscing elit sed do</p>
                </div>
                <div>
                    <img className= "feature-item-img" src ={FeatureItem} alt= "Feature item"/>
                    <h2 className= "feature-item-title">Feature</h2>
                    <p className = "feature-item-details">Loren ipsum dolor sit amet, consectetur adipiscing elit sed do</p>
                </div>
                <div>
                    <img className= "feature-item-img" src ={FeatureItem} alt= "Feature item"/>
                    <h2 className = "feature-item-title">Feature</h2>
                    <p className = "feature-item-details">Loren ipsum dolor sit amet, consectetur adipiscing elit sed do</p>
                </div>
              </div>
            </section>
            <section className= "screenshot">
                <h2 id= "screenshot-header">Loren ipsum dolor sit amet consectetur</h2>
                <p id="screenshot-details">Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmud tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercination ullamco laboris nisi ut aliquip ex ea commodo consequat. eiusmud tempor incididunt</p>
            </section>
        </div>
    )
}

export default Content