import React from 'react';
import video1 from "../images_challenge/Video (1).png";

const VideoAboutChallenge = () => {
    return (
        <div className="video_about_challenge_s">
            <h2>
                Відео найбільших проходжень
            </h2>
            <div className = "proc_over">
            <div className="video_variants">
                <div><span className="variants_chall_video" onClick = {(e) => {
                    document.querySelectorAll(".video_variants span").forEach((e) => {
                        e.classList.remove("variants_chall_video")
                    })
                    e.currentTarget.classList.add("variants_chall_video")
                    let first = document.querySelector(".video_variants_video .first")
                    let second = document.querySelector(".video_variants_video .second")
                    let third = document.querySelector(".video_variants_video .third")
                    let fourth = document.querySelector(".video_variants_video .fourth")
                    third.classList.add("dis_none")
                    fourth.classList.add("dis_none")
                    second.classList.add("dis_none")
                    first.classList.add("dis_block")
                    first.classList.remove("dis_none")
                }}>$1 000 000 KortanaFx</span></div>
                <div><span onClick = {(e) => {
                    document.querySelectorAll(".video_variants span").forEach((e) => {
                        e.classList.remove("variants_chall_video")
                    })
                    e.currentTarget.classList.add("variants_chall_video")
                    let first = document.querySelector(".video_variants_video .first")
                    let second = document.querySelector(".video_variants_video .second")
                    let third = document.querySelector(".video_variants_video .third")
                    let fourth = document.querySelector(".video_variants_video .fourth")
                    first.classList.add("dis_none")
                    fourth.classList.add("dis_none")
                    third.classList.add("dis_none")
                    second.classList.add("dis_block")
                    second.classList.remove("dis_none")
                }}>$400 000 Nova Funding</span></div>
                <div><span onClick = {(e) => {
                    document.querySelectorAll(".video_variants span").forEach((e) => {
                        e.classList.remove("variants_chall_video")
                    })
                    e.currentTarget.classList.add("variants_chall_video")
                    let first = document.querySelector(".video_variants_video .first")
                    let second = document.querySelector(".video_variants_video .second")
                    let third = document.querySelector(".video_variants_video .third")
                    let fourth = document.querySelector(".video_variants_video .fourth")
                    first.classList.add("dis_none")
                    fourth.classList.add("dis_none")
                    second.classList.add("dis_none")
                    third.classList.add("dis_block")
                    third.classList.remove("dis_none")
                }}>$200 000 KortanaFx</span></div>
                <div><span onClick = {(e) => {
                    document.querySelectorAll(".video_variants span").forEach((e) => {
                        e.classList.remove("variants_chall_video")
                    })
                    e.currentTarget.classList.add("variants_chall_video")
                    let first = document.querySelector(".video_variants_video .first")
                    let second = document.querySelector(".video_variants_video .second")
                    let third = document.querySelector(".video_variants_video .third")
                    let fourth = document.querySelector(".video_variants_video .fourth")
                    e.currentTarget.classList.add("variants_chall_video")
                    first.classList.add("dis_none")
                   second.classList.add("dis_none")
                    third.classList.add("dis_none")
                    fourth.classList.add("dis_block")
                    fourth.classList.remove("dis_none")
                }}>$400 000 Tradicave</span></div>
            </div>
            </div>
            <div className="video_variants_video">
                <iframe className = "first" src="https://www.youtube.com/embed/Sj8movPEhds"
                        title="ЯК МИ ПРОЙШЛИ ЧЕЛЕНДЖІ НА 1 МІЛЬЙОН | KortanaFx" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe className = "second dis_none" src="https://www.youtube.com/embed/rRnY7cYrmzY"
                        title="400K Nova Funding Live Проходження" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe className = "third dis_none" src="https://www.youtube.com/embed/QyExTj09frE"
                        title="Ми пройшли челендж на 200k за 13 хвилин. KortanaFx" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe className = "fourth dis_none" src="https://www.youtube.com/embed/Z4zU7TD9oz0"
                        title="400 000$ | Проходження челенджів проп-компанії Tradicave"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default VideoAboutChallenge;