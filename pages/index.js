import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzaria Next.js</title>
        <meta name="description" content="Criado por André Machado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      
    </div>
  )
}
