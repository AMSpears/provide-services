import React, { Component } from 'react'

//Carousel Images
import SlideOne from "../Img/screenshot-one.png"
import SlideTwo from "../Img/screenshot-two.png"
import SlideThree from "../Img/screenshot-three.png"

import $ from "jquery";
import  "slick-carousel"

import "./Carousel.css"

 $(document).ready(function () {
     // carousel functionality
    $('.carousel-container').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows:false,
        easing:true,
        swipe:true,
        touchMove: true,
        useCSS: true,
        dots: true,
    });

    $('.carousel-container').slick('slickPlay')

 });
class  Carousel extends Component {
 
     render() {
        return (
         <div>
            <div className="carousel-container">
                <div>
                    <img className ="slide-image" src={SlideOne}/>
                </div>
                <div>
                    <img className ="slide-image" src={SlideTwo}/>
                </div>
                <div>
                    <img className ="slide-image" src={SlideThree}/>
                </div>
            </div>
        </div>

        );
    }
}

export default Carousel