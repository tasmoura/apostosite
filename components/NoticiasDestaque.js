//this component is the home page section 'Notícias'. It take the last 3 news from 'noticiasdb'

import noticiasStyles from '../styles/NoticiasLista.module.css'
import newsdb from './noticiasdb.js'

function NoticiasDestaque() {

    const news = newsdb.slice(0,3);

    return (
        <section id="noticias" className={noticiasStyles.noticiascont}>
            <h2>Blog</h2>
            <div>

                {news.map((card, index) => {
                    const indexStr = index.toString();
                    const hrefPath = 'noticias/' + indexStr;
                    const keyID = 'noticiasDestaque' + indexStr;
                    const titleStr = card.title;
                    const resumeStr = card.resume;

                    return(
                        <div key={keyID} className={noticiasStyles.card}>
                            <a href={hrefPath}>
                            <img src={card.imgsrc} alt={card.imgalt} />
                            <div>
                                <h3 dangerouslySetInnerHTML={{__html: titleStr}}></h3>
                                <p dangerouslySetInnerHTML={{__html: resumeStr}}></p>
                            </div>
                            </a>
                        </div>
                    )
                })}
                
            </div>
            <a className={noticiasStyles.button} href='/noticias/'>Veja mais</a>
        </section>
    )
}

export default NoticiasDestaque