import React, {useEffect, useRef, useState} from 'react';
import "../bot.css"
import iphones from "../images_bot/iphones_Main.png"
import perev from "../images_bot/perev.png"
import videoBot from "../images_bot/video_bot.png"
import stat from "../images_bot/stat1.png"
import need1 from "../images_bot/need1.png"
import miniLogo from "../images_bot/mini_logo.png"
import hiTrading from "../images_bot/stat6.png"
import stat2 from "../images_bot/stat2.png"
import pidkl2 from "../images_bot/pidkl2.png"
import pidkl3 from "../images_bot/pidkl3.png"
import pidkl4 from "../images_bot/pidkl4.png"
import FPidkl from "../images_bot/FPidkl.svg"
import SPidkl from "../images_bot/SPidkl.svg"
import TPidkl from "../images_bot/TPidkl.svg"
import FoPidkl from "../images_bot/FoPidkl.svg"
import HiBot1440 from "../images_bot/stat5.png"
import Sertifikate from "../components/Sertifikate";
import SliderChallenge from "../components/PricesChallenge";
import MainMenuHeader from "../components/MainMenuHeader";
import FaqBot from "../components/FaqBot";
import {useInView} from "react-intersection-observer"
import secondImg from "../images_bot/secondBotI.svg"
import "../1200-1440bot.css"
import { animated, useSpring } from '@react-spring/web';
import CountUp from "react-countup";
import plus from "../images/Vector (1).png";
import BotSertifikate from "../components/BotSertifikate";
import SliderBot from "../components/SliderBot";
import whitepay from "../images_bot/whitepay.png"
import krr from "../images_bot/krr.png"
import warrn from "../images_bot/warrn.png"
import axios from "axios"

const Bot = () => {

    let paying = async () => {
        axios.get("https://hitrading.com.ua/api/v1/user/some").then((data) => {
            console.log(data.data)
            document.location.href = data.data.order.acquiring_url
        })
    }
    const [stats, setStats] = useState([]);
    const counterRef = useRef(null);
    const { inView, ref } = useInView({ threshold: 0 });
    useEffect(() => {
        if (inView) {
            // Запуск анимации Countup
            console.log(inView)
            setStats([
                { value: 83.63, label: 'Загальний прибуток' },
                { value: 96, label: 'Переможні місяці з моменту запуску' },
                { value: 3.23, label: 'Минулого місяця' },
                { value: 77, label: 'Відсоток прибуткових трейдів' },
            ])
        }
    }, [inView]);
    return (
        <div className="bott">
            <div className = "video_about_page" onClick={()=> {
                document.querySelector(".video_about_page").classList.remove("dis_block")
            }}>
                <div className = "oplata">
                    <h2>
                        Оберіть спосіб оплати
                    </h2>
                    <img src={whitepay} className = 'whit' onClick={paying}/>
                    <img src={krr} alt="" className = "fk"/>
                    <div className = "yellow">
                        <img src={warrn}/>
                        <div>В коментарі до оплати вкажіть послугу та свою пошту або нік в телеграмі! Після оплати з вами зв'яжуться протягом години.
                        </div>
                        </div>
                </div>

            </div>

            <MainMenuHeader/>
            <div className="first_block">
                <div className="gray_block"></div>
                <div className="white_block"></div>
                <div className="main_description">
                    <div className="main_h1_challenge">
                        <span>Пасивний дохід</span>{window.innerWidth < 768 ? <br/> : ""} за допомогою ботів
                    </div>
                    <div className="perev_challenge bot">
                        <p>Роботизована торгівля або алгоритмічний трейдинг вже довгий час підкорює серця
                            інвесторів.</p>
                        <br/>
                        <p>Це чудовий інструмент для пассивного інвестування, який за рахунок складного відсотка
                            збільшує Ваш капітал.</p>
                    </div>
                    <a href = "https://t.me/volodymyr_fx">
                    <button className="button_style first_block_button">
                        Придбати бота
                    </button>
                    </a>
                </div>
                <img src={iphones} alt=""/>
            </div>
            <a name = "perev"></a>
            <div className="perev_robot">
                <div className = "main_perev_robot">

                    <h2>
                        Переваги роботизованої торгівлі
                    </h2>
                    <p>
                        Можливості, які відкриває наш торговий бот в порівнянні з іншими видами інвестицій:
                    </p>
                </div>
                <div className = "about_perev_bot">
                    <div><img src={perev} alt=""/></div>
                    <div>
                    <div className = "grid_perev">
                        <div className = "variants_bot f">
                            <div className = "variants_bot_number">01</div>
                            <div className = "variants_bot_desc">Автоматизована торгівля</div>
                            <div className = "variants_bot_desc_main">Кожен трейд, який здійснюється нашими алгоритмами, базується виключно на точних прорахунках
                                і на 100% автоматизований.</div>
                        </div>
                        <div className = "variants_bot f">
                            <div className = "variants_bot_number">02</div>
                            <div className = "variants_bot_desc">Пасивний дохід</div>
                            <div className = "variants_bot_desc_main">Оскільки наше програмне забезпечення керує всіма угодами за Вас, Ви можете зосередитися на важливих речах у житті. При цьому отримуючи девіденди від Ваших інвестицій.</div>
                        </div>
                    </div>
                    <div className = "grid_perev">
                        <div className = "variants_bot f">
                            <div className = "variants_bot_number">03</div>
                            <div className = "variants_bot_desc">Надійність</div>
                            <div className = "variants_bot_desc_main">Успішно перевірені багаторічні тести, прозора статистика та ефективна робота протягом тривалого часу, дають Вам впевненість в надійності наших алгоритмів.</div>
                        </div>
                        <div className = "variants_bot f">
                            <div className = "variants_bot_number">04</div>
                            <div className = "variants_bot_desc">Контроль ризиків</div>
                            <div className = "variants_bot_desc_main">Налаштування наших алгоритмів дає повний доступ до контролю ризиків, максимальних просадок та приблизних доходів.</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className = "unique_bot">
                <div className = "unique_bot_main">
                    <div className = "unique_bot_main_about_video mob_y">
                        <iframe src="https://www.youtube.com/embed/sVCSmWhDmVU"
                                title="HiTrading | Торгові боти" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className = "unique_bot_main_about">
                        <h2>
                            Що робить нас унікальними?
                        </h2>
                        <p>
                            HiTrading став першим сервісом в Україні та поза її межами, створивши унікальну працюючу зв'язку між проп-компанією та торговим ботом.
<br/>
<br/>
                            Користуючись алгоритмами, наші клієнти отримали більше 20-ти виплат з проп-компаній на загальну суму більше 22 000 доларів.
                        </p>
                        <a href = "https://t.me/volodymyr_fx">
                        <button className = "button_style">
                            Придбати бота
                        </button>
                        </a>
                    </div>
                    <div className = "unique_bot_main_about_video mob_n">
                        <iframe src="https://www.youtube.com/embed/sVCSmWhDmVU"
                                title="HiTrading | Торгові боти" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className = "bot_stat">
                <h2>
                    Статистика
                </h2>
                <p>
                    Ми віддаємо перевагу системі, яка буде працювати роками.
                    <br/>
                    <br/>
                    Навчений на системі штучного інтелекту, торговий бот, був створений для того,
                    щоб стабільно та надійно приносити прибуток для клієнта.
                </p>
                <div className = "stat_numbers" ref={ref}>
                    {inView ? stats.map((stat, index) => (
                        <div key={index}>
                            <div className="grad_text">
                                <CountUp duration={5} ref={el => (el = counterRef[index])} end={stat.value} />%
                            </div>
                            <div className="under_grad">{stat.label}</div>
                        </div>
                    )) : ""}

                </div>
                <div className = "stat_img">
                    <img src={stat} alt = ""/>
                </div>
            </div>
            <BotSertifikate/>

            <div className = "need_bot">
                <h2>
                    Що потрібно для {window.innerWidth < 768 ? <br/> : ""}<span>підключення бота?</span>
                </h2>
                <div className = "need_bot_desc">
                    Підключення бота до вашого рахунку відбувається дуже просто,
                    з усіма кроками я буду Вам допомагати:
                </div>

                    <div className = "images_need_bot mob_y">
                        <img src = {FPidkl} alt = ""/>
                        <img src = {SPidkl} alt = ""/>
                        <img src = {TPidkl} alt = ""/>
                        <img src = {FoPidkl} alt = ""/>
                    </div>

                    <div className = "images_need_bot mob_n">
                    <img src = {need1} alt = ""/>
                    <img src = {secondImg} alt = ""/>
                    <img src = {pidkl3} alt = ""/>
                    <img src = {pidkl4} alt = ""/>
                </div>

                <a href = "https://t.me/volodymyr_fx">
                <button className = "button_style">
                    Придбати
                </button>
                </a>

            </div>
            <div className = "hi_trading_bot">
                <h2>
                    HiTrading бот
                </h2>
                <div className = "about_hi_trading">
                    <div className = "box_shadow_div f">
                        <div className = "flex_div">
                            <div><img src = {miniLogo}/></div>
                            <div className = "ins_flex_div">HiTrading bot</div>
                        </div>
                        <div className = "desc_hi_trading">
                            <ul>
                                <li>Легкий в налаштуванні</li>
                                <li>Підходить для будь-якої компанії, де дозволений алготрейдинг</li>
                                <li>Має контроль ризику та фіксовані стоп-лосси</li>
                                <li>Безлімітна кількість активацій в межах одного користувача</li>
                            </ul>
                        </div>
                        <div className = "hi_trading_price">
                            <div className = "pricee">Ціна</div>
                            <div className = "price_num">$849</div>
                        </div>
                        <button className = "button_style" onClick={() => {
                            document.querySelector(".video_about_page").classList.add("dis_block")
                        }}>
                            Придбати бота
                        </button>
                    </div>
                    <div className = "box_shadow_div s">
                        <div className = "stat_bot">
                            Статистика бота
                        </div>
                        {window.innerWidth > 1919 ? <img src={hiTrading} alt = "" className = "qwsa1"/> : ""}
                        {window.innerWidth > 1439 ? <img src={HiBot1440}/> : <img src={HiBot1440}/>}

                    </div>
                </div>
            </div>
            <a name = "feedback"></a>
            <SliderBot/>
            <a name = "faq"></a>
            <FaqBot/>
        </div>
    );
};

export default Bot;