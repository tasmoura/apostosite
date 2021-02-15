import Nav from './Nav'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import bgimage from '../public/img/conexoes.png'

const Layout = ({ children }) => {
    return(
        <div>
            <Head>
                <title>Aposto Comunicações</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="//db.onlinewebfonts.com/c/86da85d699ce035da08306ffd6520604?family=AlmaqW01-Rough" rel="stylesheet" type="text/css"/>
            </Head>
            <Nav></Nav>
            <div className={styles.container}>
                <main className={styles.main}>
                    <img className={styles.backgroundimg} src={bgimage} alt="logo da aposto: arroba com a maiúculo e fonte cursiva"/>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout