import noticiasStyles from '../styles/NoticiasDestaque.module.css'
import newsdb from './noticiasdb.js'

function NoticiasDestaque() {

    const news = newsdb;

    return (
        <section id="noticias" className={noticiasStyles.noticiascont}>
            <h2>Notícias</h2>
            <div>

                {news.map((card) => {
                    return(
                        <div className={noticiasStyles.card}>
                            <a href='/'>
                            <img src={card.imgsrc} alt={card.imgalt} />
                            <div>
                                <h3>{card.title}</h3>
                                <p>{card.body}</p>
                            </div>
                            </a>
                        </div>
                    )
                })}
                
            </div>
            <a className={noticiasStyles.button} href='/noticias'>Veja mais</a>
        </section>
    )
}

export default NoticiasDestaque