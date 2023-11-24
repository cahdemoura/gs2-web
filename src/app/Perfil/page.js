"use client"
import style from './page.module.css'
import React, { useState, useEffect } from 'react'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Cards from '@/components/Cards/Cards'

const url1 = 'http://localhost:3000/diagnosticos';
const url2 = 'http://localhost:3000/agendamentos';

const menuOpt = ['exames', 'agendamentos']

const Perfil = () => {
    const [info, setInfo] = useState([])
    const [diagnostico, setDiagnostico] = useState([])

    const [menu, setMenu] = useState()

    useEffect(() => {
        async function fetchData() {

            const res1 = await fetch(url2);
            const data1 = await res1.json();

            setDiagnostico(data1)
        }
        fetchData()
    }, [])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url1);
            const data = await res.json();

            setInfo(data)
        }
        fetchData()
    }, [])

    const menuSelect1 = () => {
        setMenu(menuOpt[0])
    }

    const menuSelect2 = () => {
        setMenu(menuOpt[1])
        console.log(diagnostico)
    }

    return (
        <main className={'main'}>
            <Navbar perfillogado={true} />

            <section className={style.mainSection}>
                <div className={style.sideMenu}>
                    <ul>
                        <li onClick={menuSelect1}>
                            Exames
                        </li>
                        <li onClick={menuSelect2}>
                            Agendamentos
                        </li>
                    </ul>
                </div>

                <div className={style.rightSideMenu}>

                    <div className={style.flex}>
                        {menu == 'exames' && <h2 className={style.title}>Lista Exames</h2>}
                        <div className={style.flexCell}>
                            {menu == 'exames' &&
                                info.map((resultados) => (
                                    <div className={style.diagnosticBar} key={resultados.id}>
                                        <div className={style.diagnosticInfo}>
                                            {info != '' && <p>Data: {resultados.data}</p>}
                                            {info != '' && <p>Exame: {resultados.exame}</p>}
                                            {info != '' && <p>Diagnostico: {resultados.diagnostico}</p>}

                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>


                    <div className={style.flex}>
                        {menu == 'agendamentos' && <h2 className={style.title}>Lista Agendamentos</h2>}
                        <div className={style.flexCell}>
                            {menu == 'agendamentos' &&
                                diagnostico.map((agendamento) => (
                                    <div className={style.diagnosticBar} key={agendamento.id}>
                                        <div className={style.diagnosticInfo}>
                                            {diagnostico != '' && <p>Data: {agendamento.data}</p>}
                                            {diagnostico != '' && <p >Exame: {agendamento.horario}</p>}
                                            {diagnostico != '' && <p>Diagnostico: {agendamento.medico}</p>}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}

export default Perfil