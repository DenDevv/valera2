import React from 'react';
import frame65 from "../images_challenge/Frame 65.svg";
import frame66 from "../images_challenge/Frame 427320438.svg";
import frame67 from "../images_challenge/Frame 427320439.svg";
import frame68 from "../images_challenge/Frame 427320440.svg";
import frame69 from "../images_challenge/Frame 427320441.svg";
import newMin from "../images_challenge/newMin.png";
import newMin1 from "../images_challenge/newMin1.png";
import newMin2 from "../images_challenge/newMin2.png";
import newMin3 from "../images_challenge/newMin3.png";
import newMin4 from "../images_challenge/newMin4.png";
import proc1 from "../images_challenge/proc2.svg";
import proc2 from "../images_challenge/proc1.svg";
import proc3 from "../images_challenge/proc3.svg";
import proc4 from "../images_challenge/proc4.svg";
import proc5 from "../images_challenge/proc5.svg";
import procL from "../images_challenge/challLK2.png";

const ProccessChallenge = () => {
    return (
        <div className="process">
            {window.innerWidth > 374 && window.innerWidth < 768 ?<>
                <h2>Процес отримання <span>Funded акаунту</span></h2>
                <div className="process_f for_tablet_mobile">
                    <div><img src={procL} alt="" className = "razz"/></div>
                    <div><img src={proc2} alt=""/></div>
                    <div><img src={proc3} alt=""/></div>
                    <div className = "for_tablet_mobile non"><img src={proc4} alt=""/></div>
                </div>
                <div className="process_f for_tablet_mobile_min">
                <div><img src={procL} alt="" className = 'first_img razz'/></div>
    <div><img src={proc2} alt=""/></div>
    <div><img src={proc3} alt=""/></div>
    <div className = "for_tablet_mobile o"><img src={proc4} alt=""/></div>
</div>
    <div className = "for_tablet_mobile y"><img src={proc5} alt=""/></div>

    <div className="process_s">
        <div className = "for_tablet_mobile_min non"><img src={proc4} alt=""/></div>
        <div className = "for_tablet_mobile_min"><img src={proc5} alt=""/></div>
    </div></> :
                <>
    <h2>Процес отримання <span>Funded акаунту</span></h2>
    <div className="process_f for_tablet_mobile">
        <div><img src={newMin1} alt=""/></div>
        <div><img src={newMin2} alt=""/></div>
        <div><img src={newMin3} alt=""/></div>
        <div className = "for_tablet_mobile o"><img src={newMin} alt=""/></div>
    </div>
    <div className="process_f for_tablet_mobile_min">
        <div><img src={frame65} alt=""/></div>
        <div><img src={frame66} alt=""/></div>
        <div><img src={frame67} alt=""/></div>
        <div className = "for_tablet_mobile o"><img src={newMin} alt=""/></div>
    </div>
    <div className = "for_tablet_mobile y"><img src={newMin4} alt=""/></div>

    <div className="process_s">
        <div className = "for_tablet_mobile_min"><img src={frame68} alt=""/></div>
        <div className = "for_tablet_mobile_min"><img src={frame69} alt=""/></div>
    </div></>
            }

        </div>
    );
};

export default ProccessChallenge;