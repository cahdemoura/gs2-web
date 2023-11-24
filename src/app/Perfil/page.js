"use client"
import style from './page.module.css'
import React, { useState, useEffect } from 'react'
import '../globals.css'
import Navbar from '@/components/Navbar'

const url = 'http://localhost:3000/diagnosticos';

const Perfil = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const data = await res.json();

            setInfo(data)
        }
        fetchData()
    }, [])
    return (
        <main className={'main'}>
            <Navbar perfillogado={true} />

            <section className={style.mainSection}>
                <div className={style.sideMenu}>
                    <ul>
                        <li>
                            Exames
                        </li>
                        <li>
                            Agendamentos
                        </li>
                    </ul>
                </div>

                <div>
                    <div className={style.diagnosticBar}>
                        <div className={style.diagnosticInfo}>
                            <button onClick={() => console.log(info[0].data)}>clique</button>
                            {info != '' && <p>Data: {info[0].data}</p>}
                            {info != '' && <p>Data: {info[0].exame}</p>}
                            {info != '' && <p>Data: {info[0].diagnostico}</p>}
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default Perfil