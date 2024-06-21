import React from 'react';
import Banner from "../components/Banner";
import Poslugi from "../components/Poslugi";
import Garanty from "../components/Garanty";
import Sertifikate from "../components/Sertifikate";
import Otzyvy from "../components/Otzyvy";
import Pred from "../components/Pred";
import Faq from "../components/Faq";
import '../App.css';
import plus from "../images/Vector (1).png";

const MainPage = () => {
    return (
        <>
            <div className = "video_about_page" onClick={()=> {
                document.querySelector(".video_about_page").classList.remove("dis_block")
                document.querySelector("iframe").src = ""
            }}>
                <iframe src=""
                        title="HiTrading | Головна ідея" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <img src={plus} alt="" className = "fk"/>
            </div>
            <Banner/>
            <Poslugi/>
            <Garanty/>
            <Sertifikate/>
            <Otzyvy/>

            <Pred/>
            <Faq/>
        </>
    );
};

export default MainPage;