import footerStyles from '../styles/Footer.module.css'

function Hero() {
    return (
        <footer id="hero" className={footerStyles.footercont}>
            <div className={footerStyles.socialmedia}>
                <a href='https://www.facebook.com/apostocomunicacao/' target='blank'><img src='http://www.agenciaaposto.com/img/icon_f.svg' alt='icone do facebook' /></a>
                <a href='https://www.instagram.com/apostocomunicacao/' target='blank'><img src='http://www.agenciaaposto.com/img/icon_i.svg' alt='icone do instagram' /></a>
                <a href='https://whats.link/apostocom' target='blank'><img src='http://www.agenciaaposto.com/img/icon_w.svg' alt='icone do whattsapp' /></a>
            </div>
        </footer>
    )
}

export default Hero