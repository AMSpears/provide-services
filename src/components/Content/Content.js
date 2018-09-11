import React from 'react'
import Logo from '../Img/provide_logo_dark-blue.png'
import FeatureItem from "../Img/noun_Network_27392.png"
import UseCaseImg1 from "../Img/noun_Network_1813755.png"
import UseCaseImg2 from "../Img/noun_Network_27392.png"
import UseCaseImg3 from "../Img/noun_Network_1354320.png"

import SlideShow from "../SlideShow/SlideShow"
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
                <div className= "screenshot-container">
                    <div>
                        <h2 id= "screenshot-header">Loren ipsum dolor sit amet consectetur</h2>
                        <p id="screenshot-details">Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmud tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercination ullamco laboris nisi ut aliquip ex ea commodo consequat. eiusmud tempor incididunt</p>
                    </div>
                    <div id= "slideshow-container">
                        <SlideShow/>
                    </div>
                </div>
            </section>
            <section className= "use-cases">
                <div className= "use-cases-container">
                    <div>
                        <h2 id= "use-cases-header">Use Cases</h2>
                        <p id= "use-cases-details">Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmud tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mimim veniam, quis nostrud exercination ullamco laboris.</p>
                    </div>
                <div className= "use-cases-items-container">
                    <div className= "use-cases-item-container">
                        <div><img className= "use-cases-item-img" src ={UseCaseImg1} alt= "Use case item"/></div>
                        <div><p className = "use-cases-item-details">Loren ipsum dolor sit amet, consectetur adipiscing elit sed do</p></div>
                    </div>
                    <div className= "use-cases-item-container">
                        <div><img className= "use-cases-item-img" src ={UseCaseImg2} alt= "Use case item"/></div>
                        <div><p className = "use-cases-item-details">Loren ipsum dolor sit amet, consectetur adipiscing elit sed do</p></div>
                    </div>
                    <div className= "use-cases-item-container">
                        <div><img className= "use-cases-item-img" src ={UseCaseImg3} alt= "Use case item"/></div>
                        <div><p className = "use-cases-item-details">Loren ipsum dolor sit amet, consectetur adipiscing elit sed do</p></div>
                    </div>
                </div>
                </div>
            </section>
            <section className= "cio-info">
                <div className= "cio-info-section">
                    <div id= "pic-container"></div>
                    <div> 
                        <p id= "cio-bio">Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmud tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <p id= "cio-name">Joe Schmo - CIO at AutoDeck</p>
                    </div>
                </div>
            </section>
            <section className = "footer">
                <div className = "footer-info-container">
                    <div><img id = "footer-logo" src= {Logo} alt= "Provide Service"/></div>
                    <div>
                        <p id= "address-details">Atlanta Tech Park<br/> 107 Technology Pkwy NW Ste. 215 <br/> Peachtree Corners, GA 30090</p>
                    </div>
                    <div id="divider"></div>
                    <div className=  "social-media-links">
                        <div> 
                            <a className="link-icon"><i class="fab fa-github"></i></a>
                            <a className= "link-text">github.com/provideservices</a>
                        </div>
                        <div> 
                            <a className="link-icon"><i class="fab fa-twitter"></i></a>
                            <a className= "link-text">twitter.com/provideservices</a> 
                        </div>
                        <div> 
                            <a className="link-icon"><i class="fas fa-envelope"></i></a>
                            <a className= "link-text"> hello@provide.services</a>
                        </div>
                    </div>
                </div>
                <p id= "copy-rights"> Copyright © 2018 Provide Technologies Inc. All rights reserved.</p>
            </section>
        </div>
    )
}

export default Content