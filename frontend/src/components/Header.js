import React from 'react';
import logo from "../images/Logo - #8.png"
import logoM from "../images/HiTrading 1.svg"
import burger from "../images/burgMenu.png"
import strel from "../images/strelDown.png"
import first from "../images/firstHead.png"
import second from "../images/secondHead.png"
import MainMenuHeader from "./MainMenuHeader";
import logosvg from "../images/LogoSvg.svg"
import fInH from "../images/sInH.png"
import sInH from "../images/tInH.png"

const Header = () => {
    return (
        <>
            <MainMenuHeader/>

        <div className="main_header">
            <div className = "fix_black  dis_none" onClick={(e) => {
                e.currentTarget.classList.add("dis_none")
            }}><div className = "vs_header">
                <a href = "/challenge">
                    <div><img src = {fInH}/></div>
                </a>
                <a href = "/bot">
                    <div><img src = {sInH}/></div>
                </a>
            </div></div>
            <div className = "w1920">
            {
                window.innerWidth > 1199
                    ?
                    <>


                        <div className="inside_header f" style={{marginTop: "25px"}}><a href="/"><img src={logosvg} alt=""/></a>
                        </div>
                        <div className="inside_header menu" >
                            <div onClick={() => {
                                document.querySelector(".fix_black").classList.toggle("dis_none")
                            }} style={{cursor:"pointer"}}>
                                Послуги<img src={strel} style={{height: "100%"}}/>


                            </div>
                            <div><a href="#perev">Переваги</a></div>
                            <div><a href="#feedback">Відгуки</a></div>
                            <div><a href="/#contacts">Контакти</a></div>
                            <div><a href="#faq">FAQ</a></div>
                        </div>
                        <div className="inside_header">
                            <a href="https://t.me/volodymyr_fx">
                                <button className="contact_button button_style">
                                    Звʼязатися з нами
                                </button>
                            </a>
                        </div>
                    </>
                    :
                    <>
                        <div className="inside_header" style={{marginTop: "25px"}}><a href = "/"><img src={logosvg} alt=""/></a></div>
                        <div></div>
                        <div className="div_burg"><img src={burger} alt="" className="burg" onClick={() => {
                            let y = document.querySelector(".main_menu_header")
                            y.classList.toggle("zakr")
                        }}/></div>
                    </>

            }
            </div>
        </div>
        </>
    );
};

export default Header;