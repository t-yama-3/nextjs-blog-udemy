/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "t-yama-3";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href="/favicon.ico" />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/profile.png" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src="/images/profile.png" className={`${utilStyles.borderCircle}`} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;