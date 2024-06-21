import React from 'react';
import inst from "../images/inst.png"
import tel from "../images/telg.png"
import yout from "../images/youtube.png"
import pr from "../images/main_logo_tr.png"
import "../App.css"
const Pred = () => {
    return (
        <>


        <div className = "pred">

            <div>
                <div className = "logog_main mob"><img src={pr} alt="" style={{width:"100%"}}/></div>
                <h2>
                    Приєднуйтесь до нас та починайте заробляти вже завтра
                </h2>
                <div className = "text_pred">
                    Кожен продукт був особисто перевірений та протестований на власних коштах, задля забезпечення максимальної якості та та безпеки ваших коштів. <br/><br/>Відкривайте нові можливості з Hitrading, адже отримання Funded акаунту ще не було таким простим
                </div>
                <div className = "society">
                    <a href = "https://www.instagram.com/hitrading_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><div><img src = {inst} alt=""/>Instagram</div></a>
                    <a href = "https://t.me/hitrading_fx"><div><img src = {tel} alt=""/>Telegram</div></a>
                    <a href = "https://www.youtube.com/@hitrading"><div><img src = {yout} alt=""/>YouTube</div></a>
                </div>
            </div>
            <div className = "logog_main"><img src={pr} alt="" style={{width:"100%"}}/></div>

        </div>
        </>
    );
};

export default Pred;