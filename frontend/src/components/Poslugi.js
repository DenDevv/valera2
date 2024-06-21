import React from 'react';
import rect1 from "../images/Rectangle 4516.png"
import rect2 from "../images/Rectangle 4516 (1).png"
import rect3 from "../images/Rectangle 4516 (2).png"
const Poslugi = () => {
    return (
<><a name = "poslugi"></a>
        <div className = "poslugi">

            <h1>Послуги нашого сервісу</h1>
            <div className = "poslugi_text">Ключ до нових можливостей в трейдингу</div>
            <div className = "perev">
                <div className = "p1">
                <div><img src={rect1}/></div>
                <p className = "name_perev">Проходження челенджів проп-компаній</p>
                    <p className="about_perev">Більше  не потрібно витрачати місяці на проходження челенджів, ми це зробимо за Вас всього за декілька днів.</p>
                    <a href = "/challenge"><button className = "perev_button button_style">Дізнатися більше</button></a>
                </div>
                <div className = "p2">
                    <div><img src={rect2}/></div>
                    <p className = "name_perev">Роботизована торгівля</p>
                    <p className="about_perev">Найкращій інструмент для пасивного доходу.</p>
                    <a href = "bot"><button className = "perev_button button_style">Дізнатися більше</button></a>
                </div>
            </div>

        </div>
</>
    );
};

export default Poslugi;