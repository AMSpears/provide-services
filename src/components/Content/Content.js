import React from 'react'
// Main Logo
import Logo from '../Img/provide_logo_dark-blue.png'
// Feature Images
import FeatureItem from "../Img/noun_Network_1.png"
// Use cases Images
import UseCaseImg1 from "../Img/noun_Network_2.png"
import UseCaseImg2 from "../Img/noun_Network_1.png"
import UseCaseImg3 from "../Img/noun_Network_3.png"
// Team Members Images
import Kyle from "../Img/Team/kyles-thomas.png"
import Misha from "../Img/Team/misha-sulpovar.png"
import Dawn from "../Img/Team/dawn-mcgreevey.png"
import Jeff from "../Img/Team/jeff-bekiares.png"
import Zac from "../Img/Team/zac-parker.png"
import Taylor from "../Img/Team/taylor-heath.png"
import Philip from "../Img/Team/philip-keiter.png"
import Kevin from "../Img/Team/kevin-munc.png"
import Chaz from "../Img/Team/chaz-spears.png"
// Advisor Members Images
import Greg from "../Img/Team/Advisors/greg-kidd.png"
import Chris from "../Img/Team/Advisors/chris-maffuccio.png"
import Austin from "../Img/Team/Advisors/austin-mills.png"
import Dale from "../Img/Team/Advisors/dale-tuck.png"
import Len from "../Img/Team/Advisors/len-vitello.png"
import Thomas from "../Img/Team/Advisors/thomas-bennett.png"
// screenshot slideshow section
import SlideShow from "../SlideShow/SlideShow"
//Content CSS
import './Content.css'

const Content = () => {
    return (
        <div>
            <section className ="intro">
                <div className= "intro-container">
                    <img id = "intro-logo" src= {Logo} alt = "Provide Services"/>
                    <h1 id= "intro-header">Loren ipsum dolor sit amet consectetur</h1>
                    <p id= "intro-details">Loren ipsum dolor sit amet, consectetur adipiscing elit sed do eiurmud tempor incididunt</p>
                    <button id="sign-up"> Sign Up</button>
                </div>
            </section>

            <a name= "features">
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
            </a>

            <section className= "screenshot">
                <div className= "screenshot-container">
                    <div className= "screenshot-details-container">
                        <h2 id= "screenshot-header">Loren ipsum dolor sit amet consectetur</h2>
                        <p id="screenshot-details">Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmud tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercination ullamco laboris nisi ut aliquip ex ea commodo consequat. eiusmud tempor incididunt</p>
                    </div>
                    <div id= "slideshow-container">
                        <SlideShow/>
                    </div>
                </div>
            </section>

            <a name= "use-cases">
                <section className= "use-cases">
                    <div className= "use-cases-container">
                        <div className= "use-cases-details-container">
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
            </a>
            <a name="team">
                <section className= "team-advisors-section">
                    <div className= "team-main-container">
                        <h1 id="team-header">Our Team</h1>

                        <ul className= "team-container-1">
                            <li className= "team-member-details">
                                <img className="team-member-img" src= {Kyle}  alt= "Team Member"/>
                                <p className="team-member-name">Kyle Thomas</p>
                                <p className="team-member-title">Founder, CEO & CTO</p>
                            </li>
                            <li className= "team-member-details">
                                <img className="team-member-img" src= {Misha}  alt= "Team Member"/>
                                <p className="team-member-name"> Misha Sulpovar</p>
                                <p className="team-member-title"> Co-Founder & COO/CSO</p>
                            </li>
                            <li className= "team-member-details">
                                <img className="team-member-img" src= {Dawn}  alt= "Team Member"/>
                                <p className="team-member-name"> Dawn McGreevey</p>
                                <p className="team-member-title"> Marketing</p>   
                            </li>
                            <li className= "team-member-details">
                                    <img className="team-member-img" src= {Jeff}  alt= "Team Member"/>
                                    <p className="team-member-name"> Jeff Bekiares</p>
                                    <p className="team-member-title"> General Counsel</p>
                            </li>
                        </ul>
                        <ul className= "team-container-2">
                            <li className= "team-member-details-2">
                                <img className="team-member-img-row-2" src= {Zac}  alt= "Team Member"/>
                                <p className="team-member-name">Zac Parker</p>
                                <p className="team-member-title">Product/QA</p>
                            </li>
                            <li className= "team-member-details-2">
                                <img className="team-member-img-row-2" src= {Taylor}  alt= "Team Member"/>
                                <p className="team-member-name">Taylor Heath</p>
                                <p className="team-member-title"> Customer Success</p>
                            </li>
                            <li className= "team-member-details-2">
                                <img className="team-member-img-row-2"  src= {Philip}  alt= "Team Member"/>
                                <p className="team-member-name"> Philip Keiter</p>
                                <p className="team-member-title"> Front-End Architect</p>
                            </li>
                            <li className= "team-member-details-2">
                                <img className="team-member-img-row-2" src= {Kevin}  alt= "Team Member"/>
                                <p className="team-member-name">Kevin Munc</p>
                                <p className="team-member-title"> Sr. Platform Engineer</p>
                            </li>
                            <li className= "team-member-details-2">
                                <img className="team-member-img-row-2" src= {Chaz}  alt= "Team Member"/>
                                <p className="team-member-name"> Chaz Spears</p>
                                <p className="team-member-title"> UX Consultant</p>
                            </li>
                        </ul>
                    </div>
                    <div className= "advisors-main-container">                       
                        <h1 id= "advisors-header">Advisors</h1>
                        <ul className= "advisors-container">
                            <li className= "advisor-member-details">
                                <img className= "advisor-member-img" src= {Greg}  alt= "Advisor"/>
                                <p className="advisor-member-name"> Greg Kidd</p>
                                <p className="advisor-member-title">Position and Company</p>
                            </li>
                            <li className= "advisor-member-details">
                                <img className= "advisor-member-img" src= {Chris}  alt= "Advisor"/>
                                <p className="advisor-member-name"> Chris Maffuccio</p>
                                <p className="advisor-member-title">Position and Company</p>
                            </li>
                            <li className= "advisor-member-details">
                                <img className= "advisor-member-img"src= {Austin}  alt= "Advisor"/>
                                <p className="advisor-member-name"> Austin Mills</p>
                                <p className="advisor-member-title">Position and Company</p>
                            </li>
                            <li className= "advisor-member-details">
                                <img className= "advisor-member-img" src= {Dale}  alt= "Advisor"/>
                                <p className="advisor-member-name"> Dale Tuck</p>
                                <p className="advisor-member-title">Position and Company</p>
                            </li>
                            <li className= "advisor-member-details">
                                <img className= "advisor-member-img"src= {Len}  alt= "Advisor"/>
                                <p className="advisor-member-name"> Len Vitello</p>
                                <p className="advisor-member-title">Position and Company</p>
                            </li>
                            <li className= "advisor-member-details">
                                <img className= "advisor-member-img" src= {Thomas}  alt= "Advisor"/>
                                <p className="advisor-member-name"> Thomas Bennett</p>
                                <p className="advisor-member-title">Position and Company</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </a>

              <section className= "cio-info">
                <div className= "cio-info-section">
                    <div className= "cio-details-container">
                        <div id= "pic-container"></div>
                            <div className= "cio-details">  
                                <p id= "cio-bio">Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmud tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <p id= "cio-name">Joe Schmo - CIO at AutoDeck</p>
                            </div>
                    </div>
                </div>
            </section>
            

           <section className = "footer">
                <div className = "footer-info-container">
                    <div className="logo-container">
                        <a href="/"><img id = "footer-logo" src= {Logo} alt= "Provide Service"/></a>
                    </div>
                    <div className="details-container">
                        <div><p id= "address-details">Atlanta Tech Park<br/> 107 Technology Pkwy NW Ste. 215 <br/> Peachtree Corners, GA 30090</p></div>
                        <div id="divider"></div>
                        <div className=  "social-media-links">
                            <div> 
                                <a href= "https://github.com/provideservices" target= "_blank" className="media-links"><i class="fab fa-github"></i>  github.com/provideservices</a>
                            </div>
                            <div> 
                                <a href= "https://twitter.com/provideplatform" target= "_blank" className="media-links"><i class="fab fa-twitter"></i>twitter.com/provideplatform</a>
                            </div>
                            <div> 
                                <a href="mailto:hello@provide.services" target="_blank" className="media-links"><i class="fas fa-envelope"></i>hello@provide.services</a>
                            </div>
                            <div> 
                                <a href="https://medium.com/@provide" target="_blank" className="media-links"><i class="fab fa-medium"></i>medium.com/@provide</a>
                            </div>
                            <div> 
                                <a href="https://t.me/joinchat/GXp2vFNWuJb0LW7G7rgfWA" target="_blank" className="media-links"><i class="fab fa-telegram"></i>Telegram</a>
                            </div>
                        </div>
                    </div>
                </div>
                <p id="copyright">Copyright © 2018 Provide Technologies Inc. All rights reserved.</p>
            </section>
            
        </div>
    )
}

export default Content