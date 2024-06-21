import React from 'react';
import inst from "../images/Frame 427320339.png";
import pr from "../images/main_logo_tr.png";

const AboutUsChallenge = () => {
    return (
        <div className = "pred">
            <div>
                <h2>
                    Приєднуйтесь до нас та починайте заробляти вже завтра.
                </h2>
                <div>
                    Адже всі наші продукти направлені, як на практикуючих трейдерів, з метою економії часу,
                    так і на новачків, яких цікавить пасивний дохід на Forex.
                    <br/><br/>
                    Кожен продукт був особисто перевірений та протестований на власних коштах, задля
                    забезпечення максимальної якості та безпеки наших клієнтів.
                </div>
                <div className = "society">
                    <div><img src = {inst} alt=""/>Instagram</div>
                    <div><img src = {inst} alt=""/>Telegram</div>
                    <div><img src = {inst} alt=""/>YouTube</div>
                </div>
            </div>
            <div className = "logog_main"><img src={pr} alt="" style={{width:"100%"}}/></div>

        </div>
    );
};

export default AboutUsChallenge;