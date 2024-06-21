import React from 'react';
import plus from "../images/Vector (1).png"
const Faq = () => {
    return (
        <>
            <a name = "faq"></a>

        <div className = "faq_main">
            <div className = "faq">FAQ</div>
            <div className="faq_quest">
                <div className="faq_ans">
                    <div  onClick = {(e) => {
                        document.querySelector(".anss1").classList.toggle("open_p_faq")

                        document.querySelector(".fk").classList.toggle("rotateKrest")
                    }}>Чому проходите челенджі тільки на Nova Funding/KortanaFx/Tradicave?
                        <img src={plus} alt="" className = "fk"/>
                    </div>
                    <div className = "anss1">
                        <p>
                        Лише сервери даних компаній підходять для роботи нашого алгоритму, на них немає затримки, комісій та завищених спредів, що дозволяє робити проходження за декілька днів.
                        Інші компанії такими показниками не володіють, тому проходження там неможливі.
                        </p>
                    </div>
                </div>
                <div className="faq_ans">
                    <div  onClick = {(e) => {
                        document.querySelector(".anss2").classList.toggle("open_p_faq")

                        document.querySelector(".sk").classList.toggle("rotateKrest")
                    }}>Чи можна бота для проходження поставити на реальний рахунок?
                        <img src={plus} alt="" className = "sk"/>
                    </div>
                    <div className = "anss2">
                        <p>
                        Ні, даний алгоритм працює тільки на демо-акаунтах (челенджах) та не може бути використаний на реальних коштах, по тим самим причинам які ми вказали у відповіді на перше питання.
                        </p> </div>
                </div>
                <div className="faq_ans">
                    <div  onClick = {(e) => {
                        document.querySelector(".anss3").classList.toggle("open_p_faq")

                        document.querySelector(".tk").classList.toggle("rotateKrest")
                    }}>Куди краще ставити торгового бота, на проп чи на реальний рахунок?
                        <img src={plus} alt="" className = "tk"/>
                    </div>
                    <div className = "anss3">
                        <p>
                        Наш торговий бот оптимізований як для проп-акаунтів так і для брокерських рахунків. У другому випадку відсоток дохідності буде більший за рахунок, того що ми можемо собі дозволити та більший ризик та просадки.
                        </p> </div>
                </div>
                <div className="faq_ans">
                    <div onClick = {(e) => {
                        document.querySelector(".anss4").classList.toggle("open_p_faq")

                        document.querySelector(".fok").classList.toggle("rotateKrest")
                    }}>Скільки разів можна використовувати придбаного бота?
                        <img src={plus} alt="" className = "fok"/>
                    </div>
                    <div className = "anss4">
                        <p>
                        В межах одного користувача торгового бота можна використовувати на безлімінту кількість акаунтів. Перепродаж або передавання боту третім особам заборонено.
                        </p> </div>
                </div>
                <div className="faq_ans">
                    <div onClick = {(e) => {
                        document.querySelector(".anss5").classList.toggle("open_p_faq")

                        document.querySelector(".fifk").classList.toggle("rotateKrest")
                    }}>Чи було зафіксовано хоч одне злиття челенджу?
                        <img src={plus} alt="" className = "fifk"/>
                    </div>
                    <div className = "anss5">
                        <p>
                        Так, на даному етапі ми  отримали близько 20 виплат із даних компаній, тому у нас є всі підстави їм довіряти, головне дотримуватись правил.
                        </p>
                    </div>
                </div>
                <div className="faq_ans">
                    <div onClick = {(e) => {
                        document.querySelector(".anss6").classList.toggle("open_p_faq")

                        document.querySelector(".sik").classList.toggle("rotateKrest")
                    }}>Чи є підтвердження що ці пропи виплачують?
                        <img src={plus} alt="" className = "sik"/>
                    </div>
                    <div className = "anss6">
                        <p>
                        Так, на даному етапі ми  отримали близько 20 виплат із даних компаній, тому у нас є всі підстави їм довіряти, головне дотримуватись правил.
                        </p>
                    </div>
                </div>
                <div className="faq_ans">
                    <div onClick = {(e) => {
                        document.querySelector(".anss7").classList.toggle("open_p_faq")

                        document.querySelector(".simk").classList.toggle("rotateKrest")
                    }}>Ніколи не чув про ці проп компанії, чим вони відрізняються від інших?
                        <img src={plus} alt="" className = "simk"/>
                    </div>
                    <div className = "anss7">
                        <p>
                        В англомовному комʼюніті ці компанії мають таку ж саму популярність як FTMO та інші, по суті вони такі ж самі , але дозволяють і швидкі проходження.
                        </p></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Faq;