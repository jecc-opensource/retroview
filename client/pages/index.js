import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Retroview</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Retroview
        </h1>

        <div className={styles.grid}>
          <Link href="/interviews">
            <a className={styles.card}>
              <h2>Interviews </h2>
              <p>View and add to your own list of interviews!</p>
            </a>
          </Link>

          <Link href="/skills">
            <a className={styles.card}>
              <h2>Skills </h2>
              <p>Continue honing those skills and turn those boxes green!</p>
            </a>
          </Link>
        </div>
      </main>

    </div>
  )
}