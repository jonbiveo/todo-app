import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function test() {
  return(
    <div className={styles.container}>
      <Head>
        <title>Lets go</title>
        <meta name="description" content="Look at me" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my test page!
        </h1>
      </main>
    </div>
  )
}