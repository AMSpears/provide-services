import React from 'react'

import './SlideShow.css'

const SlideShow = () => {
    
    return (
    <section>
        <div className = "slideshow-container">
            <div className= "slides">
                <h3>Slide One</h3>
            </div>
             <div className= "slides">
                <h3>Slide Two</h3>
            </div>
             <div className= "slides">
                <h3>Slide Three</h3>
            </div>
        </div>
        <div className= "dot-container">
            <span className="dot" onclick="currentSlide(1)"></span> 
            <span className="dot" onclick="currentSlide(2)"></span> 
            <span className="dot" onclick="currentSlide(3)"></span> 
        </div>
    </section>
    )
}
export default SlideShow
