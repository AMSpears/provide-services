import React from 'react'

// Main Logoimport FeatureItem1 from "../Img/noun_Network_1.png"

import Logo from '../Img/Presskit/provide-logo-dark-blue-light-letters-dark-bg.png'
// Feature Images
import FeatureItem1 from "../Img/turnkey-devops.svg"
import FeatureItem2 from "../Img/turnkey-dlt.svg"
import FeatureItem3 from "../Img/massively-scalable.svg"


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
import Greg from "../Img/Team/advisors/greg-kidd.png"
import Chris from "../Img/Team/advisors/chris-maffuccio.png"
import Austin from "../Img/Team/advisors/austin-mills.png"
import Dale from "../Img/Team/advisors/dale-tuck.png"
import Len from "../Img/Team/advisors/len-vitello.png"
import Thomas from "../Img/Team/advisors/thomas-bennett.png"
//CIO image
import CIO from "../Img/cio-picture.jpeg"
// screenshot slideshow section
import Carousel from "../Carousel/Carousel"
// Partners logos 
import Authio  from "../Img/authio-logo.png"
import Atlantaai from "../Img/atlanta-ai-logo.png"
import Intuit_factory from "../Img/intuit-factory-logo.png"

// contact form component
import ContactForm from "../ContactForm/ContactForm"


import './Content.css'

const Content=() => {
    return (
        <div className="content-container">
            <section className ="intro">
                <div className= "intro-container">
                    <img id="intro-logo" src= {Logo} alt="Provide Services"/>
                    <h1 id= "intro-header">The best blockchain platform.</h1>
                    <p id= "intro-details">Enable your organization and engineering teams with the most powerful DLT solution on the market.</p>
                    <a href="http://console.provide.services/#/signup" id="sign-up">Sign Up</a>
                </div>
            </section>

            <a name= "platform">
                <section className ="feature-section">
                    <div className= "feature-main-container">
                        <h1 id= "feature-header">Provide is DLT, within reach.</h1>
                        <p id= "feature-details">Blockchain adoption does not come easy; the learning curve is steep and myriad risks await the unprepared.</p>
                        <div className= "feature-items-container">
                            <div className="feature-item">
                                <img className= "feature-item-img" src ={FeatureItem1} alt= "Turnkey DevOps"/>
                                <h2 className= "feature-item-title">Immediate Networks</h2>
                                <p className="feature-item-details">Our end-to-end platform stands up private blockchain networks within hours, not months, giving your team the ability to focus dev time on your use cases instead of platform development.</p>
                            </div>
                            <div className="feature-item">
                                <img className= "feature-item-img" src ={FeatureItem2} alt= "Turnkey DLT"/>
                                <h2 className= "feature-item-title">Utilize Your Current Team</h2>
                                <p className="feature-item-details">Built by developers, for developers, our turnkey, API-enabled blockchain enables current team members and partners to use programming languages they already know.  Think of it like Twilio, for blockchain.</p>
                            </div>
                            <div className="feature-item">
                                <img className= "feature-item-img" src ={FeatureItem3} alt= "Massively Scalable"/>
                                <h2 className="feature-item-title">Cost Effective Scalability</h2>
                                <p className="feature-item-details">We’ve done the heavy lifting on the core Blockchain development, dramatically cutting your development time - and costs - while ensuring you’re building on top of a trusted peer-reviewed, fully transparent platform.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </a>

            <section className= "screenshot">
                <div className= "screenshot-container">
                    <div className= "screenshot-details-container">
                        <h2 id= "screenshot-header">Built by developers, for developers.</h2>
                        <p id="screenshot-details"></p>
                    </div>
                    <div id= "slideshow-container">
                        <Carousel/>
                    </div>
                </div>
            </section>
            
            <a name= "use-cases">
                <section className= "use-cases">
                    <div className= "use-cases-container">
                        <div className= "use-cases-details-container">
                            <h2 id= "use-cases-header">Use Cases</h2>
                            <p id= "use-cases-details">Provide exposes a scalable, protocol-agnostic platform for deploying and interacting with public or permissioned blockchain networks using a modern developer experience and easy-to-understand APIs.</p>
                        </div>
                        <div className= "use-cases-items-container">
                            <div className= "use-cases-item-container">
                                <div><img className= "use-cases-item-img" src ={UseCaseImg1} alt= "Deploy a private or permissioned blockchain network in minutes"/></div>
                                <div><p className="use-cases-item-details">Your organization needs to spin up a blockchain fast. Like today.</p></div>
                            </div>
                            <div className= "use-cases-item-container">
                                <div><img className= "use-cases-item-img" src ={UseCaseImg3} alt= "Blockchain PaaS"/></div>
                                <div><p className="use-cases-item-details">You want to run a blockchain pilot to determine the right tech stack before diving in head first.</p></div>
                            </div>
                            <div className= "use-cases-item-container">
                                <div><img className= "use-cases-item-img" src ={UseCaseImg2} alt= "Scalable"/></div>
                                <div><p className="use-cases-item-details">You’ve identified a specific business case or problem want to determine the best solution.</p></div>
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
                                <p className="team-member-title">Founder & CEO/CTO</p>
                            </li>
                            <li className= "team-member-details">
                                <img className="team-member-img" src= {Misha}  alt= "Team Member"/>
                                <p className="team-member-name">Misha Sulpovar</p>
                                <p className="team-member-title">Co-Founder & COO/CSO</p>
                            </li>
                            <li className= "team-member-details">
                                <img className="team-member-img" src= {Dawn}  alt= "Team Member"/>
                                <p className="team-member-name">Dawn McGreevey</p>
                                <p className="team-member-title">Marketing</p>
                            </li>
                        </ul>
                        <ul className= "team-container-2">
                            <li className= "team-member-details-2">
                                <img className="team-member-img-row-2" src= {Zac}  alt= "Team Member"/>
                                <p className="team-member-name">Zac Parker</p>
                                <p className="team-member-title">Product/QA</p>
                            </li>
                            <li className= "team-member-details-2">
                                <img className="team-member-img-row-2"  src= {Philip}  alt= "Team Member"/>
                                <p className="team-member-name">Philip Keiter</p>
                                <p className="team-member-title">Frontend Architect</p>
                            </li>
                            <li className= "team-member-details-2">
                                <img className="team-member-img-row-2" src= {Kevin}  alt= "Team Member"/>
                                <p className="team-member-name">Kevin Munc</p>
                                <p className="team-member-title">Sr. Platform Engineer</p>
                            </li>
                            <li className= "team-member-details-2">
                                <img className="team-member-img-row-2" src= {Chaz}  alt= "Team Member"/>
                                <p className="team-member-name">Chaz Spears</p>
                                <p className="team-member-title">UX Wizard</p>
                            </li>
                            <li className= "team-member-details-2">
                                <img className="team-member-img-row-2" src= {Jeff}  alt= "Team Member"/>
                                <p className="team-member-name">Jeff Bekiares</p>
                                <p className="team-member-title">General Counsel</p>
                            </li>
                        </ul>
                    </div>
                    <div className= "advisors-main-container">                       
                        <h1 id= "advisors-header">Advisors</h1>
                        <ul className= "advisors-container">
                            <li className= "advisor-member-details">
                                <img className= "advisor-member-img" src= {Greg}  alt= "Advisor"/>
                                <p className="advisor-member-name">Greg Kidd</p>
                                <p className="advisor-member-title">&nbsp;</p>
                            </li>
                            <li className= "advisor-member-details">
                                <img className= "advisor-member-img" src= {Chris}  alt= "Advisor"/>
                                <p className="advisor-member-name">Chris Maffuccio</p>
                                <p className="advisor-member-title">&nbsp;</p>
                            </li>
                            <li className= "advisor-member-details">
                                <img className= "advisor-member-img"src= {Austin}  alt= "Advisor"/>
                                <p className="advisor-member-name">Austin Mills</p>
                                <p className="advisor-member-title">&nbsp;</p>
                            </li>
                            <li className= "advisor-member-details">
                                <img className= "advisor-member-img" src= {Dale}  alt= "Advisor"/>
                                <p className="advisor-member-name">Dale Tuck</p>
                                <p className="advisor-member-title">&nbsp;</p>
                            </li>
                            <li className= "advisor-member-details">
                                <img className= "advisor-member-img"src= {Len}  alt= "Advisor"/>
                                <p className="advisor-member-name">Len Vitello</p>
                                <p className="advisor-member-title">&nbsp;</p>
                            </li>
                            <li className= "advisor-member-details">
                                <img className= "advisor-member-img" src= {Thomas}  alt= "Advisor"/>
                                <p className="advisor-member-name">Thomas Bennett</p>
                                <p className="advisor-member-title">&nbsp;</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </a>

            <section className= "cio-info">
                <div className= "cio-info-section">
                    <div className= "cio-details-container">
                        <div><img id= "pic-container" src={CIO} alt="CIO"/></div>
                            <div className= "cio-details">
                                <p id= "cio-bio">"Provide helped me leverage technologies that would have been otherwise inaccessible to a startup or enterprise looking to navigate the complexities of building a blockchain solution. I was incredibly lucky to know Kyle and his team. They not only saved me millions of development dollars and a ton of time, they helped me deliver the first scalable solution for my industry."</p>
                                <p id= "cio-name">Aaron Wuchner, Founder, Carmony</p>
                            </div>
                    </div>
                </div>
                    <div className= "partners-contactform-outer-container">
                        <h1 id= "partners-header">Partners</h1>
                        <div className= "partners-container">
                           {/* <div className= "partners-logo"><img id="aws-logo" src={Authio} alt = "AWS" /></div>
                           <div className= "partners-logo"><img id="azure-logo" src= {Atlantaai} alt= "Azure" /></div>  */}
                           <div className= "partners-logo"><img id="authio-logo" src={Authio} alt = "Authio" /></div>
                           <div className= "partners-logo"><img id="atlantaai-logo" src= {Atlantaai} alt= "Atlanta Applied AI" /></div> 
                           <div className= "partners-logo"><img id= "intuit-factory-logo" src={Intuit_factory}  alt="Intuit Factory" /></div>
                        </div>

                        <a name="contact">
                            <div className= "contact-form-container">
                                <h1 id= "contact-us-header">Contact Us</h1>
                                <ContactForm/>
                            </div>
                        </a>
                    </div>
            </section>
            <section className="footer">
                <div className="footer-info-container">
                    <div className="logo-container">
                        <a href="/"><img id="footer-logo" src= {Logo} alt= "Provide Service"/></a>
                    </div>
                    <div className="details-container">
                        <div><p id= "address-details">Provide Technologies Inc.<br/> 107 Technology Pkwy NW Ste. 215 <br/> Peachtree Corners, GA 30090</p></div>
                        <div id="divider"></div>
                        <div className="social-media-links">
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
