import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <div className={styles.principal}>
         <img src="/colin-lloyd-Qh-dskKw0is-unsplash.jpg" alt="girl dj" className={styles.image}/>
         <div>
          <p className={styles.name}>
            Anna Smith
          </p>
          <p className={styles.subname}>Software Engineer & Dj by night</p>
          <div className={styles.icons}>
            <img className={styles.icon} src="/twitter.svg" alt="twitter icon" />
            <img className={styles.icon} src="/linkedin.svg" alt="linkedin icon" />
            <img className={styles.icon} src="/mail.svg" alt="mail icon" />
            <img className={styles.icon} src="/github.svg" alt="github icon" />
          </div>
         </div>
         
       </div>
      </main>

      <footer className={styles.footer}>
        Made with love and Next.js{' '}
        <img src="/heart.svg" alt="Heart Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
