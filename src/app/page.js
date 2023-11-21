import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Carrousel from '@/components/Carrousel'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Carrousel/>
    </main>
  )
}
