import React from 'react';
import "../menu_head.css"
import logoM from "../images/HiTrading 1.svg";
import burger from "../images/burgMenu.png";
import krest from "../images/krest.png"
import inst from "../images/inst.png";
import tel from "../images/telg.png";
import yout from "../images/youtube.png";
import iphone from "../images/iphone_head.png";
const MainMenuHeader = () => {
    return (

        <div className="main_menu_header zakr">
            <div className = "bg_white">
            <div className="main_header">

                <a href = "/"><div className="inside_header" style={{marginTop: "25px"}}><img src={logoM} alt=""/></div></a>
                <div></div>
                <div className="div_burg"><img src={krest} alt="" className="burg" onClick={(e) => {
                let y = document.querySelector(".main_menu_header")
                    y.classList.add("zakr")
                }
                }/></div>

            </div>

            <div className = "menu_content">
                <div className = "menu_punkt"><a href = "/#poslugi" onClick={(e) => {
                    let y = document.querySelector(".main_menu_header")
                    y.classList.add("zakr")
                }
                }>Послуги</a></div>
                <div className = "menu_punkt"><a href = "#perev" onClick={(e) => {
                    let y = document.querySelector(".main_menu_header")
                    y.classList.add("zakr")
                }
                }>Переваги</a></div>
                <div className = "menu_punkt">Результати</div>
                <div className = "menu_punkt"><a href = "/#feedback" onClick={(e) => {
                    let y = document.querySelector(".main_menu_header")
                    y.classList.add("zakr")
                }
                }>Відгуки</a></div>
                <div className = "menu_punkt"><a href = "/#contacts" onClick={(e) => {
                    let y = document.querySelector(".main_menu_header")
                    y.classList.add("zakr")
                }
                }>Контакти</a></div>
                <div className = "menu_punkt"><a href = "#faq" onClick={(e) => {
                    let y = document.querySelector(".main_menu_header")
                    y.classList.add("zakr")
                }
                }>FAQ</a></div>
            </div>
            <div className = "contact_block">
                <button className = "button_style cont_button">
                    Звʼязатися з нами
                </button>
                <div className = "society">
                    <a href = "https://www.instagram.com/hitrading_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><div><img src = {inst} alt=""/>Instagram</div></a>
                    <a href = "https://t.me/hitrading_fx"><div><img src = {tel} alt=""/>Telegram</div></a>
                    <a href = "https://www.youtube.com/@hitrading"><div><img src = {yout} alt=""/>YouTube</div></a>
                </div>
            </div>
            </div>
            <div className = "image_iphone">
                <img src={iphone}/>
            </div>
            <div className = "black_back" onClick={(e) => {
                let y = document.querySelector(".main_menu_header")
                y.classList.add("zakr")
            }
            }>

            </div>

        </div>
    );
};

export default MainMenuHeader;