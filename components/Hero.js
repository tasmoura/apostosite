import heroStyles from '../styles/Hero.module.css'

function Hero() {
    return (
        <section id="hero" className={heroStyles.herocont}>
            <div className={heroStyles.herovid}>
                <span className={heroStyles.sronly}>vídeo de apresentação: aposto comunicação, marketing com vida. Marketing muito além do habitual.</span>
            </div>
            <h1><span>Conectar</span> pessoas, lugares e negócios através da <span>comunicação</span></h1>
        </section>
    )
}

export default Hero