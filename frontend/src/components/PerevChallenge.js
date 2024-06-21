import React from 'react';
import frame from "../images_challenge/Frame 427320465.png";

const PerevChallenge = () => {
    return (
        <div className="perev_challenge_third_block">
            <div className="about_perev_challenge">
                <img src={frame} alt="" className = "mob_top"/>
                <div className="about_perev_challenge_first">
                    <h2>Переваги проходжень з нами</h2>
                    <ul>
                        <li>Ми перший та найбільший сервіс по проходженням в Україні</li>
                        <li>Наша база налічує більше 150+ задоволених клієнтів</li>
                        <li>Загальна сума пройдених нами акаунтів перевищує 15 мільйонів доларів</li>
                        <li>Нас обирають за найвищу якість сервісу</li>
                        <li>Надання гарантій, які позбавляють Вас всіх можливих ризиків</li>
                    </ul>
                </div>

                <img src={frame} alt="" className = "mob_top m"/>

            </div>
        </div>
    );
};

export default PerevChallenge;