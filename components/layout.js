
import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/util.module.css'
import Link from 'next/link'

const name = 'Jack Chipofya'
export const siteTitle = 'Kineta'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Kineta Blog"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
          <img src="/images/logo.jpg" className={utilStyles.topImg} alt={name}/>
         <img src="/images/profile.jpg" className={utilStyles.borderCircle} alt={name}/>
          <h3><b>{name}</b></h3>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img src="/images/logo.jpg" className={utilStyles.topImg} alt={name}/>
              </a>
            </Link>
            
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}