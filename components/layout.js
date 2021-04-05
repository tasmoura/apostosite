//layout base of website. _app.js use it as a container

import React from 'react'
import Nav from './Nav'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import useMousePosition from './useMousePosition'

function Layout({ children }) {
    
    //use mouse position to parallax effect on bg images
    const mouseWidth = useMousePosition().clientX;
    const mouseHeight = useMousePosition().clientY;
    const winWidth = 500;
    const winHeight = 500;
    
    const bg1_X_pos = Math.round( (mouseWidth/winWidth)*5 ) -15 + '%';
    const bg1_Y_pos = Math.round( (mouseHeight/winHeight)*10 ) -20 + '%';
    const bg2_X_pos = Math.round( (mouseWidth/winWidth)*-5 ) -15 + '%';
    const bg2_Y_pos = Math.round( (mouseHeight/winHeight)*-10 ) -20 + '%';

    return (
        <div>
            <Head>
                <title>Aposto Comunicações</title>
                <link rel='icon' href='/favicon.ico' />
                <link href='//db.onlinewebfonts.com/c/86da85d699ce035da08306ffd6520604?family=AlmaqW01-Rough' rel='stylesheet' type='text/css' />
            </Head>
            <Nav></Nav>
            <div className={styles.container}>
                <main className={styles.main}>
                    <img className={styles.backgroundimg} style={{bottom:bg1_Y_pos, left:bg1_X_pos}} src='http://www.agenciaaposto.com/img/bg1.png' alt="logo da aposto: arroba com a maiúculo e fonte cursiva" />
                    <img className={styles.backgroundimg} style={{bottom:bg2_Y_pos, left:bg2_X_pos}} src='http://www.agenciaaposto.com/img/bg2.png' alt="logo da aposto: arroba com a maiúculo e fonte cursiva" />
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout