import React from 'react';
import logo from "../images/Logo_small.png"
import logosvg from "../images/LogoSvg.svg"
const Footer = () => {
    return (
        <div className = "footer">
            <div><img src={logosvg} alt = ""/></div>
            <div className = "footer_p">
                <div style={{marginBottom:"16px", color: "#959595"}}>Навігація</div>
                <div><a href = "/#poslugi">Послуги</a></div>
                <div><a href = "/#perev">Переваги</a></div>
                <div><a href = "/bot">Боти</a></div>
                <div><a href = "/#contacts">Контакти</a></div>
                <div><a href = "/#faq">FAQ</a></div>
            </div>
            <div className = "footer_p">
                <div style={{marginBottom:"16px", color: "#959595"}}>Послуги</div>
                <div style={{marginTop:"16px"}}><a href = "/challenge">Проходження челенджів проп-компаній</a></div>
                <div><a href = "/bot">Роботизована торгівля</a></div>
            </div>
            <div>
                <a href="https://t.me/volodymyr_fx"><button className = "contact_button button_style">Звʼязатися з нами</button></a>
            </div>
        </div>
    );
};

export default Footer;