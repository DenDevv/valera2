import React, {useRef} from 'react';
import Slider from "react-slick";
import fourth_slide from "../images_challenge/fourth_slide.png";
import sec_slide from "../images_challenge/second_slide.png";
import th_slide from "../images_challenge/th_slide.png";
import fifth_slide from "../images_challenge/fifth_slide.png";
import six_slide from "../images_challenge/six.png";
import left from "../images/strelLeft.png";
import right from "../images/strelRight.png";

import o1 from "../images_challenge/1.PNG"
import o2 from "../images_challenge/2.PNG"
import o3 from "../images_challenge/3.PNG"
import o4 from "../images_challenge/4.PNG"
import o5 from "../images_challenge/5.PNG"
import o6 from "../images_challenge/6.PNG"
import o7 from "../images_challenge/7.PNG"
import o8 from "../images_challenge/8.PNG"
import o9 from "../images_challenge/9.PNG"
import o10 from "../images_challenge/10.PNG"
import o11 from "../images_challenge/11.PNG"
import o12 from "../images_challenge/12.PNG"
import o13 from "../images_challenge/13.PNG"
import o14 from "../images_challenge/14.PNG"

const SliderChallenge = () => {
    let settings
    if (window.innerWidth > 1919) {
        settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7.4,
            slidesToScroll: 1,
        };
    } else if (window.innerWidth < 1919 && window.innerWidth > 1439) {
        settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
        };
    } else if (window.innerWidth < 1440 && window.innerWidth > 1199) {
        settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 1,
        };
    } else if (window.innerWidth < 1200 && window.innerWidth > 768) {
        settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
        };
    } else if (window.innerWidth < 767 && window.innerWidth > 375) {
        settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
    }
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    return (

        <div className="feedback_chall">
            <h2 className="feedback_zag">
                Відгуки
                <div className="strel_sert">
                    <div onClick={previous}><img src={left}/></div>
                    <div onClick={next}><img src={right}/></div>
                </div>
            </h2>
            <Slider {...settings} ref={slider => {
                sliderRef = slider;
            }}>
                <div className="slide">
                    <img src={o1} alt=""/>
                </div>
                <div className="slide">
                    <img src={o2} alt=""/>
                </div>
                <div className="slide">
                    <img src={o3} alt=""/>
                </div>
                <div className="slide">
                    <img src={o4} alt=""/>
                </div>
                <div className="slide">
                    <img src={o5} alt=""/>
                </div>
                <div className="slide">
                    <img src={o6} alt=""/>
                </div>
                <div className="slide">
                    <img src={o7} alt=""/>
                </div>
                <div className="slide">
                    <img src={o8} alt=""/>
                </div>
                <div className="slide">
                    <img src={o9} alt=""/>
                </div>
                <div className="slide">
                    <img src={o10} alt=""/>
                </div>
                <div className="slide">
                    <img src={o11} alt=""/>
                </div>
                <div className="slide">
                    <img src={o12} alt=""/>
                </div>
                <div className="slide">
                    <img src={o13} alt=""/>
                </div>
                <div className="slide">
                    <img src={o14} alt=""/>
                </div>
            </Slider>
        </div>

    );
};

export default SliderChallenge;