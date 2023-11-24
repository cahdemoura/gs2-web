"use client"
import React from 'react'
import style from './Cards.module.css'
const Cards = ({data,exame,diagnostico}) => {
    return (
        <div className={style.diagnosticBar}>
            <div className={style.diagnosticInfo}>
                {info != '' && <p>Data: {data}</p>}
                {info != '' && <p>Exame: {exame}</p>}
                {info != '' && <p>Diagnóstico: {diagnostico}</p>}
            </div>
        </div>
    )
}

export default Cards