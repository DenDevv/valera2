import React from 'react';
import video from "../images_challenge/Video.png";

const AboutChallengeSecondBlock = () => {
    return (
        <div className = "main_idea_challenge">
            <h2>
                Головна ідея
            </h2>
            <div className = "about_idea_challenge">
                <div>
                    Полягає в тому, щоб допомогти трейдерам пришвидшити монетизацію своїх знань
                    <br/><br/>
                    А інвесторам, які не мають досвіду в трейдингу, але шукають додаткові джерела
                    доходу, надати інструмент для цього.
                </div>
                <div>
                    Проп-компанії дають можливість управляти капіталом в сотні тисяч долларів.
                    <br/><br/>
                    Наш обов'язок - зробити його вашим в найкоротші терміни.
                </div>
            </div>
            <div className = "video_about_challenge">
                <iframe src="https://www.youtube.com/embed/ulDP9ZCAaHM"
                        title="Hitrading | Проходження челенджів" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default AboutChallengeSecondBlock;