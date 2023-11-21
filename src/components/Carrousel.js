'use client'
import Image from 'next/image'
import { useState } from "react";
import style from "./styleModules/Carrousel.module.css"
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";

const Carrousel = () => {
    const [curr, setCurr] = useState(0);
    const prev = () => {
        setCurr(curr => curr == 0 ? slides.length - 1 : curr - 1)
        console.log(curr)
    }

    const next = () => {
        setCurr(curr => curr == slides.length - 1 ? 0 : curr + 1)
        console.log(curr)

    }
    const slides = [
        "https://i.ibb.co/ncrXc2V/1.png",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png"]

    return (
        <div className={style.app}>
            <div className={style.containerCarrousel}>
                <div className={style.carrouselFlex} style={{ transform: `translateX(-${curr * 50}%)` }}>
                    {slides.map((s) => (
                        <img className={style.img} src={s}
                        />
                    ))}
                </div>
                <div className={style.buttonContianer}>
                    <button className={style.button} onClick={prev}>
                        <FaRegArrowAltCircleLeft />
                    </button>

                    <button className={style.button} onClick={next}>
                        <FaRegArrowAltCircleRight />
                    </button>
                </div>
                <div className={style.sliderFooterContainer}>
                    <div className={style.sliderFooterContent}>
                        {slides.map((_, i) => (
                            <div className={style.slidePoints} style={curr == i ? { padding: '4px', background:'#006eff' } : { background: '#ffff' }}>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            Carrousel
        </div>
    )
}

export default Carrousel