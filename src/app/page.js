"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Carrousel from '@/components/Carrousel'
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState()
  return (
    <main className={styles.main}>
      <Navbar />
      <Carrousel />
    </main>
  )
}
