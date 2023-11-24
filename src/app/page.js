"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Carrousel from '@/components/Carrousel'
import { useState } from 'react';
import Provider from '@/components/Store/Provider';

export default function Home() {
  const [user, setUser] = useState()
  return (
    <main className={styles.main}>
      <Provider>
        <Navbar />
        {/*<Carrousel />*/}
      </Provider>
    </main>
  )
}
