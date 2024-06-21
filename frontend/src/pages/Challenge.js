import React from 'react';
import "../challenge.css"
import ChallengeFirstBlock from "../components/ChallengeFristBlock";
import AboutChallengeSecondBlock from "../components/AboutChallengeSecondBlock";
import PerevChallenge from "../components/PerevChallenge";
import ProccessChallenge from "../components/ProccessChallenge";
import VideoAboutChallenge from "../components/VideoAboutChallenge";
import ChallengePrices from "../components/ChallengePrices";
import SliderChallenge from "../components/PricesChallenge";
import AboutUsChallenge from "../components/AboutUsChallenge";
import Pred from "../components/Pred";
import "../1200-1440chall.css"
import plus from "../images/Vector (1).png";
const Challenge = () => {

    return (
        <>
            <div className = "video_about_page" onClick={()=> {
                document.querySelector(".video_about_page").classList.remove("dis_block")
            }}>
                <iframe src="https://www.youtube.com/embed/TQxsK-j6WSQ"
                        title="HiTrading | Головна ідея" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <img src={plus} alt="" className = "fk"/>
            </div>
            <ChallengeFirstBlock/>
            <AboutChallengeSecondBlock/>
            <PerevChallenge/>
            <ProccessChallenge/>
            <VideoAboutChallenge/>
            <ChallengePrices/>
            <SliderChallenge/>
            <Pred/>
        </>
    );
};

export default Challenge;