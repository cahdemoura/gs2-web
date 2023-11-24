import Image from 'next/image'
import { useState } from "react";
import style from "./styleModules/InicialContent.module.css"
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";

const InicialContent = () => {
    return (
        <div className={style.mainContent}>
            <Image src={'/dezembro-laranja.png'} width={1000} height={400} alt='poster dezembro laranja'
            style={{
                width:'100%',
                objectFit:"cover",
                quality:'90'
                
            }} />
            <div className={style.textContent}>
                <h1>Bem-vindo ao skin<span className={style.titleColor}>Guardian</span></h1>
                <p>
                    SkinGuardian é uma plataforma avançada de diagnóstico de câncer de mama que utiliza tecnologias de Inteligência Artificial para melhorar a prevenção e detecção precoce. A prevenção do câncer de mama é crucial para a saúde da mulher, e aqui na SkinGuardian, estamos comprometidos em fornecer ferramentas inovadoras para auxiliar nesse processo.
                </p>

                <p>
                    O câncer de mama é uma das principais preocupações de saúde em todo o mundo. Investir em métodos eficazes de prevenção é fundamental para reduzir os riscos e salvar vidas. A SkinGuardian utiliza algoritmos avançados de IA para analisar dados e imagens, proporcionando uma abordagem precisa e eficiente na detecção de possíveis sinais de câncer de mama.
                </p>

                <p>
                    A prevenção começa com a conscientização e a educação. Nossa plataforma oferece informações valiosas sobre práticas de autocuidado, exames regulares e fatores de risco. Acreditamos que a combinação de tecnologia e conhecimento pode revolucionar a forma como enfrentamos o câncer de mama, tornando a prevenção mais acessível e eficaz.
                </p>

                <p>
                    Explore os recursos da SkinGuardian, agende consultas, e mantenha-se informado sobre as últimas inovações em saúde da mulher. Juntos, podemos construir um futuro onde o diagnóstico precoce e a prevenção são elementos fundamentais na luta contra o câncer de mama.
                </p>
            </div>

        </div>
    )

}

export default InicialContent