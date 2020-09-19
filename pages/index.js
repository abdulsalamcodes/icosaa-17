import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Icosites 2017</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title}>

          Welcome to  <Link href="./members"><a>the Circle</a></Link> 
        </h1>

    </div>
  )
}
