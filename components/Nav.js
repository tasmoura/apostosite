import navStyles from '../styles/Nav.module.css'
import { useState } from 'react'

function Nav() {

    const [toggleMenu, setToggleMenu] = useState();

    const toggleMenuBtn = function(e){
        //e.preventDefault();
        let screenSize = window.innerWidth;
        console.log(screenSize);
        console.log(toggleMenu);

        if(screenSize < 700){
            if(toggleMenu == 'block'){
                setToggleMenu('none');
            } else{
                setToggleMenu('block');
            }
        } else{
            setToggleMenu('flex');
        }
    }

    return (
        <header className={navStyles.header}>
            <a href="/"><img className={navStyles.headerimg} src='http://www.agenciaaposto.com/img/logo.svg' alt='logo da aposto: arroba com a maiúculo e fonte cursiva' /></a>
            <nav className={navStyles.navbar} style={ {display:toggleMenu }}>
                <a href="/#sobre" onClick={toggleMenuBtn}>Quem somos?</a>
                <a href="/#servicos" onClick={toggleMenuBtn}>Serviços</a>
                <a href="/#noticias" onClick={toggleMenuBtn}>Notícias</a>
                <a href="/#contato" onClick={toggleMenuBtn}>Contato</a>
            </nav>
            <div className={navStyles.socialmedia}>
                <a href='https://www.facebook.com/apostocomunicacao/' target='blank'><img src='http://www.agenciaaposto.com/img/icon_f.svg' alt='icone do facebook' /></a>
                <a href='https://www.instagram.com/apostocomunicacao/' target='blank'><img src='http://www.agenciaaposto.com/img/icon_i.svg' alt='icone do instagram' /></a>
                <a href='' target='blank'><img src='http://www.agenciaaposto.com/img/icon_w.svg' alt='icone do whattsapp' /></a>
                <button><img className={navStyles.headerimg} onClick={toggleMenuBtn} src='http://www.agenciaaposto.com/img/icon_menu.svg' alt='icone de menu' /></button>
            </div>
            
        </header>
    )
}

export default Nav