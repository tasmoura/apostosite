import noticiasStyles from '../styles/NoticiasLista.module.css'
import newsdb from './noticiasdb.js'
//import DOMPurify from 'dompurify' //protege o disparo de alert ou js em 'onError' por links quebrados nas strings inseridas por meio de 'dangerouslySetInnerHTML'


function NoticiasLista() {

    const news = newsdb;

    return (
        <section id="noticias" className={noticiasStyles.noticiascont}>
            <h2 className={noticiasStyles.title}>Notícias</h2>
            <div>

                {news.map((card, index) => {
                    const indexStr = index.toString();
                    const hrefPath = indexStr;
                    const keyID = 'noticiasLista' + indexStr;
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
        </section>
    )
}

export default NoticiasLista