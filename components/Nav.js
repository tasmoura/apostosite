import navStyles from '../styles/Nav.module.css'
//import logoimage from '../public/img/logo.svg'

function Nav() {
    return (
        <header className={navStyles.header}>
            <a href="#hero"><img className={navStyles.headerimg} src='http://www.agenciaaposto.com/img/logo.svg' alt='logo da aposto: arroba com a maiúculo e fonte cursiva' /></a>
            <nav className={navStyles.navbar}>
                <a href="#sobre">Quem somos?</a>
                <a href="#servicos">Serviços</a>
                <a href="#noticias">Notícias</a>
                <a href="#contato">Contato</a>
            </nav>
            <div className={navStyles.socialmedia}>
                <a href='https://www.facebook.com/apostocomunicacao/' target='blank'><img src='http://www.agenciaaposto.com/img/icon_f.svg' alt='icone do facebook' /></a>
                <a href='https://www.instagram.com/apostocomunicacao/' target='blank'><img src='http://www.agenciaaposto.com/img/icon_i.svg' alt='icone do instagram' /></a>
                <a href='' target='blank'><img src='http://www.agenciaaposto.com/img/icon_w.svg' alt='icone do whattsapp' /></a>
            </div>
            
        </header>
    )
}

export default Nav