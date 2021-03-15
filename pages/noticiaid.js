import { getInitialProps } from 'next/dist/next-server/lib/utils';
import noticiasdb from '../components/noticiasdb'
import noticiaStyles from '../styles/Noticia.module.css'


//import DOMPurify from 'dompurify' //protege o disparo de alert ou js em 'onError' por links quebrados nas strings inseridas por meio de 'dangerouslySetInnerHTML'

/* export async function getStaticPaths(){
  return {
    paths: [
      {
        params: { id: '0' }
      },{
        params: { id: '1' }
      },{
        params: { id: '2' }
      },{
        params: { id: '3' }
      },{
        params: { id: '4' }
      },{
        params: { id: '5' }
      },{
        params: { id: '6' }
      }
    ], fallback: false
  }
}

export async function getStaticProps(context){
  const id = context.params.id;

  return {
    props: { id: id }
  }
} */

NoticiaId.getInitialProps = ( {query} ) => {
  return {
    id: query.id
  }
}

export default function NoticiaId(props) {

  const news = noticiasdb;
  const noticiaIndex = parseInt(props.id);

  const titleStr = news[noticiaIndex].title;
  const bodyStr = news[noticiaIndex].body;

  return (
    <section className={noticiaStyles.noticiacont}>
            <div className={noticiaStyles.image}>
                <img src={news[noticiaIndex].imgsrc} alt={news[noticiaIndex].imgalt} />
            </div>
            <div>
                <h2 dangerouslySetInnerHTML={{__html: titleStr}}></h2>
                
                <div dangerouslySetInnerHTML={{__html: bodyStr}}></div>
            </div>
            <a href='/noticias/'>Voltar</a>
    </section>
  )
}