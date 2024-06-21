import React from 'react';
import plus from "../images/Vector (1).png"
const FaqBot = () => {
    return (
        <>
            <a name = "faq"></a>

            <div className = "faq_main bot">
                <div className = "faq">FAQ</div>
                <div className="faq_quest">
                    <div className="faq_ans">
                        <div onClick = {(e) => {
                            document.querySelector(".anss1").classList.toggle("open_p_faq")

                            document.querySelector(".fk").classList.toggle("rotateKrest")
                        }}>Чи існує шанс, що бот злиє депозит на брокерському рахунку?
                            <img src={plus} alt=""  className="fk"/>
                        </div>
                        <div className = "anss1">
                            <p>
                            Ні, в параметрах нашого алгоритму ми встановлюємо мінімальні настройки ризику для торгівлі.<br/>
                            Так як, цей бот працює зі стоп-лоссами, то злив депозиту може статися тільки при умові, якщо клієнт сам вкаже перевищенні параметри трейдів. При наших налаштуваннях - це неможливо.
                            </p> </div>
                    </div>
                    <div className="faq_ans">
                        <div onClick = {(e) => {
                            document.querySelector(".anss2").classList.toggle("open_p_faq")

                            document.querySelector(".sk").classList.toggle("rotateKrest")
                        }}>Чи потрібно купувати ще раз бота, якщо треба підключити інший акаунт?
                            <img src={plus} alt="" className = "sk"/>
                        </div>
                        <div className = "anss2"> <p>
                            Ні, після покупки у клієнта є необмежена кількість активацій в межах одного користувача. Тобто, інший акаунт має бути з точно таким самим ім'ям та призвищем.
                        </p></div>
                    </div>
                    <div className="faq_ans">
                        <div onClick = {(e) => {
                            document.querySelector(".anss3").classList.toggle("open_p_faq")

                            document.querySelector(".tk").classList.toggle("rotateKrest")
                        }}>Де можна подивитись більш детальну статистику бота?
                            <img src={plus} alt="" className="tk"/>
                        </div>
                        <div className = "anss3"><p>
                            Для того, щоб отримати розгорнуту статистику по боту, напишіть нам особисто в телеграм @volodymyr_fx
                        </p> </div>
                    </div>
                    <div className="faq_ans">
                        <div onClick = {(e) => {
                            document.querySelector(".anss4").classList.toggle("open_p_faq")

                            document.querySelector(".fok").classList.toggle("rotateKrest")
                        }}>Чи можна розрахувати яку дохідність я зможу отримати на дистанції в декілька років?
                            <img src={plus} alt="" className="fok"/>
                        </div>
                        <div className = "anss4"><p>
                            Так, ми можемо індивідуально вказати Ваші параметри для тесту ( розмір депозиту, кількість місяців, параметри ризику ) і поділимось з Вами приблизними результатами на які можна орієнтуватись. <br/><br/>Для цього, напишіть нам в телеграм @volodymyr_fx
                        </p> </div>
                    </div>
                    <div className="faq_ans">
                        <div onClick = {(e) => {
                            document.querySelector(".anss5").classList.toggle("open_p_faq")

                            document.querySelector(".fifk").classList.toggle("rotateKrest")
                        }}>Чи є у бота оновлення?
                            <img src={plus} alt="" className = "fifk"/>
                        </div>
                        <div className = "anss5"><p>
                            Так, як тільки версія алгоритма оновлюється, ми повідомимо Вас та в ручну завантажимо нові параметри.
                        </p></div>
                    </div>
                    <div className="faq_ans">
                        <div onClick = {(e) => {
                            document.querySelector(".anss6").classList.toggle("open_p_faq")

                            document.querySelector(".sik").classList.toggle("rotateKrest")
                        }}>Які у Вас є гарантії?
                            <img src={plus} alt="" className = "sik"/>
                        </div>
                        <div className = "anss6"><p>
                            Зі своєї сторони ми демонструємо максимально прозорий погляд на наш продукт. Ніхто на нашому ринку не може похвалитися такою кількістю виплат та відгуків.<br/> Але при цьому, ми пропонуємо повну компенсацію коштів, у випадку якщо бот злиє депозит на власних коштах. При умові, що будуть використовуватись наші настройки.
                        </p> </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqBot;