"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import InicialContent from '@/components/InicialContent'
import Provider from '@/components/Store/Provider';
import Rodape from '@/components/Rodape/Rodape';

export default function Home() {

  return (
    <main className={styles.main}>

        <Navbar />
        <InicialContent />
        <Rodape/>
    </main>
  )
}
