import navStyles from '../styles/Nav.module.css'
//import logoimage from '../public/img/logo.svg'

function Nav() {
    return (
        <header className={navStyles.header}>
            <img className={navStyles.headerimg} src='http://www.agenciaaposto.com/img/logo.svg' alt='logo da aposto: arroba com a maiúculo e fonte cursiva' />
            <nav className={navStyles.navbar}>
                <a href="valor">Valor</a>
                <a href="sobre">Quem somos?</a>
                <a href="contato">Contato</a>
            </nav>
        </header>
    )
}

export default Nav