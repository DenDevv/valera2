import React from 'react';
import elipse from "../images/Ellipse 18 (1).png"
import vector from "../images/img (3).png"
import avatar from "../images/avatar.png"
import rost from "../images/Group 98 (1).png"
import rost2 from "../images/noun-collaborate-5842135 1.png"
import card from "../images/Credit-card (1).png"
import star from "../images/Star (1).png"
import chart from "../images/zob1.png"
import chart2 from "../images/img (4).png"
import chart3 from "../images/chart-graphic (3).png"
import chart4 from "../images/zob2.png"
import kubok from "../images/kubok.svg"
import gatant1 from "../images/garanty1.png"
import logoSvg from "../images/LogoSvg.svg"
import svgWav from "../images/svgWavew.svg"
import svgHand from "../images/svgHand.svg"
import CCard from "../images/CCard.svg"
import Star from "../images/StarSvg.svg"
import Circle from "../images/CircleSvg.svg"
import Lines from "../images/Lines.svg"
import St from "../images/St.svg"
import Man from "../images/Man.svg"
import Crug from "../images/Crug.svg"

const Garanty = () => {
    return (
        <>
            <a name = "perev"></a>

        <div className = "garanty">
            <div className = "f_garant">
                <div className = "f_garant_var fit">
                    <div className = "garanty_text_f">Гарантія проходження челенджу</div>
                    <div className = "garanty_text_t">За допомогою алгоритму</div>
                    <div className = "img"><img src = {elipse} alt=""/>100%</div>
                </div>
                <div className = "f_garant_var t">
                    <div className = "garanty_text_f" style={{display:"flex", alignItems:"center"}}><img src={logoSvg}/> </div>
                    <div className = "garanty_text_t t">Перші в Україні</div>
                    <div className = "img img2"><img src = {kubok} className="full_width_img" alt=""/></div>
                </div>
                <div className = "f_garant_var th">
                    <div className = "garanty_text_f">Пройдено челенджів</div>
                    <div className = "garanty_text_t th">$ 15 230 000</div>
                    <img src = {svgWav} style={{position:"absolute", bottom:"0", width:"100%"}} alt=""/>
                </div>
                <div className = "f_garant_var th">
                    <div className = "garanty_text_f">Задоволених клієнтів</div>
                    <div className = "garanty_text_t th">150+</div>
                    <img src = {svgHand} className="hands_img" alt=""/>
                </div>

            </div>
            <div className = "t_garant">
                <h1>
                    Наші гарантії
                </h1>
                <div className = "t_gar">
                    <div className = "f_t_gar">
                        <img src={CCard} className = "imggar"/>
                        <h2>Безкоштовне проходження перших 5% челенджу</h2>
                        <div>У вас є можливість запевнитись в роботі сервісу, а вже потім оплачувати наші послуги</div>
                    </div>
                    <div className = "f_t_gar q">
                        <img src={Star} className = "imggar"/>
                        <h2>Повернемо кошти</h2>
                        <div>У разі злиття челенджу повністю компенсуємо всі витрати</div>
                    </div>
                </div>
            </div>
            <div className = "f_garant" style={{marginTop: "24px"}}>
                <div className = "f_garant_var_s">
                    <div className="number_of_garanty">01</div>
                    <div className="qw" style={{position:"relative"}}>
                        <img src = {Circle} alt = "" className = "f_s_gar"/>
                    </div>
                    <div className = "f_s_gar_f">Швидкість та ефективність</div>
                    <div className="f_s_gar_f_text">Наш алгоритм пройде будь-який челендж із доступних нам  в найкоротші терміни.</div>
                </div>
                <div className = "f_garant_var_s t">
                    <div className="number_of_garanty">02</div>
                    <div className="qw" style={{position:"relative"}}>
                        <img src = {Lines} alt = "" className = "f_s_gar" style={{width:"-webkit-fill-available"}}/>
                    </div>
                    <div className = "f_s_gar_f">Стабільний прибуток</div>
                    <div className="f_s_gar_f_text">Бот для funded рахунків має багаторічну статистику тестувань, яка доводить стабільну прибутковість при мінімальних просадках.</div>


                </div>
                <div className = "f_garant_var_s t">
                    <div className="number_of_garanty">03</div>
                    <div className="qw" style={{position:"relative", maxHeight:"110px"}}>
                        <img src = {St} alt = "" className = "f_s_gar three" style={{width:"-webkit-fill-available"}}/>
                    </div>
                    <div className = "f_s_gar_f">Детальна аналітика та звіти</div>
                    <div className="f_s_gar_f_text">Надаємо доступ до докладної статистики та звітів задля максимальної прозорості сервісу  HiTrading.</div>


                </div>
                <div className = "f_garant_var_s t">
                    <div className="number_of_garanty">04</div>
                    <div className="qw last" style={{position:"relative"}}>
                        <img src = {Man} alt = "" className = "f_s_gar four"/>
                    </div>
                    <div className = "f_s_gar_f">Експерта підтримка</div>
                    <div className="f_s_gar_f_text">Професійна підтримка та допомога на всіх етапах проходжень челенджів, встановлення та ведення торгових ботів.</div>


                </div>

            </div>
        </div>
        </>
    );
};

export default Garanty;