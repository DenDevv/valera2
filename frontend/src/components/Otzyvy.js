import React, {useRef} from 'react';
import strel1 from "../images/Frame 427320337.png"
import strel2 from "../images/Frame 427320338.png"
import pers from "../images/Ellipse 58.png"
import pers1 from "../images/Ellipse 58 (1).png"
import pers2 from "../images/Ellipse 58 (2).png"
import pers3 from "../images/Ellipse 58 (3).png"
import ff from "../images/ff.png"
import f2 from "../images/f2.png"
import f3 from "../images/f3.png"
import Slider from "react-slick";
import left from "../images/strelLeft.png";
import right from "../images/strelRight.png";
import leftOt from "../images/stelaLeft.svg";
import rightOt from "../images/strelaRight.svg";
const Otzyvy = () => {
    let settings
    if(window.innerWidth> 1919){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
        };
    }else if(window.innerWidth < 1919 && window.innerWidth> 1440){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
    }else if(window.innerWidth < 1439 && window.innerWidth> 768){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
    }else if(window.innerWidth < 430 && window.innerWidth> 399){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 0.75,
        };
    }
    else if(window.innerWidth < 767 && window.innerWidth> 429){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 0.72,
        };
    }else if(window.innerWidth < 400 && window.innerWidth> 374){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 0.825,
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
        <><a name = "feedback"></a>
        <div className = "otzyv">
            <div>
                <div><h2>Відгуки наших клієнтів
                    <div className = "strel_sert">
                        <div onClick={previous}><img src={leftOt}/></div>
                        <div onClick={next}><img src={rightOt}/></div>
                    </div></h2></div>
            </div>

            <div className = "otzyv_grid">
                <Slider {...settings} ref={slider => {
                    sliderRef = slider;
                }}>
                <div className="otzyvy_d">
                    <p>
                        Вітаю! Хочу залишити відгук про даний сервіс проходження проп акаунтів. Якщо Ви не хочете витрачати свій час та пройти 2-х фазний челендж за 2 дні і отримати 100% результат , то Вам сюди. Авжеж цей сервіс підходить не для всіх , а тільки для тих хто вміє торгувати. Тому я цілком і повністю можу рекомендувати дану послугу для трейдерів.
                    </p>
                    <div style={{display:"flex", alignItems:'center'}} className="pers_style">
                        <div><img src={pers} alt = ""/></div>
                        <div style={{marginLeft:"14px"}}>
                            <div className = "name_pers">Victor</div>
                        </div>
                    </div>
                </div>
                <div className="otzyvy_d">
                    <p>
                        Спасибо большое за быстрое прохождение, наблюдал в лайве за 3 минуты бот сделал +8%, после чего Владимир написал в личку, я быстро оплатил услугу и как только мою оплату получили челлендж был добит до +10% еще за минуту, качеством и скоростью полностью доволен 🤝
                    </p>
                    <div style={{height:"52px", display:"flex", alignItems:'center'}} className="pers_style">
                        <div><img src={pers1} alt = ""/></div>
                        <div style={{marginLeft:"14px", marginTop:"-10px"}}>
                            <div className = "name_pers">G D</div>
                            <div className = "nick">@therealdaniq</div>
                        </div>
                    </div>
                </div>
                <div className="otzyvy_d">
                    <p>
                        Дуже вдячний компанії hitrading за допомогу зекономити час на проходження челенджу в проп компанію, все дуже швидко і чітко) все пояснили і допомагають в будь якому питанні стосовно своїх послуг! Завжди на звязку та швидко відповідають! Рекомендую тим хто знає чого хоче та не хоче втрачати свій час!
                    </p>
                    <div style={{height:"52px", display:"flex", alignItems:'center'}} className="pers_style">
                        <div><img src={pers2} alt = ""/></div>
                        <div style={{marginLeft:"14px", marginTop:"-10px"}}>
                            <div className = "name_pers">Олег Остапенко</div>
                            <div className = "nick">@oleg_ostap</div>
                        </div>
                    </div>
                </div>
                <div className="otzyvy_d">
                    <p>
                        Знайшов телеграм-канал з проходженням челенджів випадково і вирішив спробувати.<br/><br/>
                        Швидкість проходження неймовірна - за день фаза)<br/>
                        Володимир швидко відповідає, а проходить ще швидше.<br/>
                        Рекомендую усім!
                    </p>
                    <div style={{height:"52px", display:"flex", alignItems:'center'}} className="pers_style">
                        <div><img src={pers3} alt = ""/></div>
                        <div style={{marginLeft:"14px", marginTop:"-10px"}}>
                            <div className = "name_pers">Andrew Vdovychenko</div>
                            <div className = "nick">@andry_vdvchnko</div>
                        </div>
                    </div>
                </div>
                    <div className="otzyvy_d">
                        <p>
                            Хочу поблагодарить сервис Hitrading за скорость и качество исполнения своих услуг.
                            Поддержка от Владимира на высшем уровне, очень компетентно и по факту отвечает на
                            вопросы, а потом подтверждает свои слова - делом! От момента покупки челленджа до
                            получения funded прошло 4 дня ( учитывая вериф и тд ).
                        </p>
                        <div style={{height:"52px", display:"flex", alignItems:'center'}} className="pers_style">
                            <div><img src={ff} alt = ""/></div>
                            <div style={{marginLeft:"14px", marginTop:"-10px"}}>
                                <div className = "name_pers">Demi</div>
                                <div className = "nick">@impressiv3v</div>
                            </div>
                        </div>
                    </div>
                    <div className="otzyvy_d">
                        <p>
                            Користуюсь послугами даного сервісу вже не вперше. Маю в управлінні вже чотири
                            рахунки, пройдені даним сервісом. На трьох із них стоять боти також куплені в
                            HiTrading. Дуже задоволена професіоналізмом та швидкістю проходженнь.
                            Вже отримала 2 виплати від роботи бота.
                        </p>
                        <div style={{height:"52px", display:"flex", alignItems:'center'}} className="pers_style">
                            <div><img src={f2} alt = ""/></div>
                            <div style={{marginLeft:"14px", marginTop:"-10px"}}>
                                <div className = "name_pers">tetti</div>
                                <div className = "nick">@tetti_m</div>
                            </div>
                        </div>
                    </div>
                    <div className="otzyvy_d">
                        <p>
                            Пишу як є, з першого погляду я не повірив шо це реально.
                            Ну бо неможливо закривати челленджі мільйонами за місяць, це просто незаконно!!
                            Я втрачав місяці щоб хоча б фазу закрити, полисів ( жартую ) і вже почав боятись
                            тих пропок, а тут звідки не візьмись, є сервіс по проходженню цих пропів.
                            Просто шок, вже маю більше 200 тисяч в управлінні😎
                        </p>
                        <div style={{height:"52px", display:"flex", alignItems:'center'}} className="pers_style">
                            <div><img src={f3} alt = ""/></div>
                            <div style={{marginLeft:"14px", marginTop:"-10px"}}>
                                <div className = "name_pers">Andrew</div>
                                <div className = "nick"> </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
            <a name = "contacts"></a>
        </>
    );
};

export default Otzyvy;