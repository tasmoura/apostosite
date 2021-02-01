import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Header(){
return <header className={styles.header}>
          <img className={styles.headerimg} src="https://drive.google.com/uc?export=view&id=1LG9O_8VSad8R_SJwgXrz3_rFQQdEoEwW" alt="logo da aposto: arroba com a maiúculo e fonte cursiva"/>
          <nav className={styles.navbar}>
              <a href="valor" class="nav-link">Valor</a>
              <a href="sobre" class="nav-link">Quem somos?</a>
              <a href="contato" class="nav-link">Contato</a>
          </nav>
      </header>
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img className={styles.backgroundimg} src="https://drive.google.com/uc?export=view&id=1NlByw8PHg6S1h_W-9DKGs6ybqKJaofdy" alt="logo da aposto: arroba com a maiúculo e fonte cursiva"/>
      <Header></Header>
    </div>
  )
}
