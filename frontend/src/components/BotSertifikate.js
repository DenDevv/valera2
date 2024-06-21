import React, {useRef} from 'react';
import rect1 from "../images/sert1.png"
import rect2 from "../images/sert2.png"
import rect3 from "../images/06878a4b11ffe5de04144ffa2f70f90d.png"
import rect4 from "../images/6be8d934b9c4c69acb87fef5d9fc5cb6.png"
import rect5 from "../images/66af545be5f5a6e77a43fb0f8d3a04d1.png"
import Slider from "react-slick";
import left from "../images/strelLeft.png"
import right from "../images/strelRight.png"
import r1 from "../images_bot/bot_sert/1.JPG"
import r2 from "../images_bot/bot_sert/2.JPG"
import r3 from "../images_bot/bot_sert/3.JPG"
import r4 from "../images_bot/bot_sert/4.PNG"
import r5 from "../images_bot/bot_sert/5.JPG"
import r6 from "../images_bot/bot_sert/6.JPG"
import r7 from "../images_bot/bot_sert/7.JPG"
import r8 from "../images_bot/bot_sert/8.JPG"
import r9 from "../images_bot/bot_sert/9.JPG"
import r10 from "../images_bot/bot_sert/10.JPG"

const BotSertifikate = () => {
    let settings
    if(window.innerWidth> 1919){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
        };
    }else if(window.innerWidth> 1999){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
        };
    }else if(window.innerWidth < 1920 && window.innerWidth> 1439){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
    }else if(window.innerWidth < 1440 && window.innerWidth> 767){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
    }else if(window.innerWidth < 768 && window.innerWidth> 374){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 0.55,
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
        <div className="sert" style={{width: "100%", position:"relative"}}>
            <h2>
                Сертифікати
                <div className = "strel_sert">
                    <div onClick={previous}><img src={left}/></div>
                    <div onClick={next}><img src={right}/></div>
                </div>
            </h2>
            <div className="sert_card" style={{width: "100%"}}>
                <Slider {...settings} ref={slider => {
                    sliderRef = slider;
                }}>
                    <div>
                        <img src={r1} alt=""/>
                    </div>
                    <div>
                        <img src={r2} alt=""/></div>
                    <div>
                        <img src={r3} alt=""/></div>
                    <div>
                        <img src={r4} alt=""/>
                    </div>
                    <div>
                        <img src={r5} alt=""/>
                    </div>
                    <div>
                        <img src={r6} alt=""/>
                    </div>
                    <div>
                        <img src={r7} alt=""/>
                    </div>
                    <div>
                        <img src={r8} alt=""/>
                    </div>
                    <div>
                        <img src={r9} alt=""/>
                    </div>
                    <div>
                        <img src={r10} alt=""/>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default BotSertifikate;