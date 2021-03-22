import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import testimonyStyle from '../styles/Testimony.module.css'
import { Carousel } from 'react-responsive-carousel';

function TestimonyCarousel() {
    return (
        <Carousel infiniteLoop showStatus={false} showThumbs={false}>
            <div>
                <div className={testimonyStyle.testimonyblock}>
                    <div>
                        <p>“A Aposto foi uma feliz escolhe entre algumas opções que tínhamos quando procurávamos um parceiro para desenvolver conteúdo e alinhar a presença digital de um dos clientes para os quais assessoramos na área de relações públicas.</p>
                        <p>Com inúmeras soluções, texto fácil e preciso, fazendo as entregas dentro do cronograma estabelecido e muitas vezes, nos surpreendendo com a antecipação, estamos muito felizes com esta parceria que só faz crescer nosso respeito pelo trabalho feito com dedicação e carinho.</p> 
                        <p>Quanto a valores, oferecem oportunidade de negociação entendo o momento em que vivemos, uma pandemia, e o quanto o trabalho é importante para o nosso cliente em comum realizar esse projeto dentro de um escopo financeiro viável.</p>
                        <p>E para engradecer ainda nossa admiração, aceitaram ser parceiros para um trabalho solidário que a Moura realiza junto a ADEF e que vai ser fundamental para que a nossa comunidade possa conhecer e saber mais sobre a entidade. Erguemos um brinde a essa linda amizade que levaremos para toda vida!”</p>
                        <p className={testimonyStyle.testimonyperson}>Vânia Moura – Moura – Agência de Relações Públicas</p>
                    </div>
                </div>
            </div>
            <div>
                <div className={testimonyStyle.testimonyblock}>
                    <div>
                        <p>“Competência, comprometimento e dedicação foram fundamentais para que a Aposto conquistasse a equipe da Festa Nacional da Música e os artistas que interagiram com eles.</p>
                        <p>Trabalhar com eles foi muito gratificante. Voa Aposto, o teu potencial é enorme!”</p>
                        <p>João Pedrassani – Coordenador da Festa Nacional da Música em Bento Gonçalves</p>
                        <p>“A Aposto é uma empresa de muita qualidade, ética e profissionalismo. Além d desenvolver toda a parte de comunicação de seus clientes, é uma empresa que preza por uma relação de afeto e cumplicidade com seus apoiadores.</p>
                        <p>Cumpre um papel de levar seus princípios éticos, morais e sociais, levantando bandeiras importantes e apoiando causas sociais, com um propósito muito claro de contribuir para que os seus clientes atinjam os resultados esperados, sempre com muita transparência, dedicação empenho e amor.”</p>
                        <p className={testimonyStyle.testimonyperson}>Paola Turchielo - Nutricionista</p>
                    </div>
                </div>
            </div>
            <div>
                <div className={testimonyStyle.testimonyblock}>
                    <div>
                        <p>“A Bruna foi um achado. No primeiro contato é aquela menina mais na dela, identificando o território e super atenta a todas as informações, mas já no segundo, é uma explosão de ideias, informações e muito amor pelo que faz!</p>
                        <p>Sou muito feliz pela escolha da Aposto, um trabalho sério e extremamente comprometido. O “não” está fora do vocabulário, tudo é possível ou adaptável e os anúncios são sempre criados com leveza, é como se conseguissem entrar na alma do negócio e captar extremamente o que queremos expressar. Sou muito grata por tê-la em minha vida.”</p>
                        <p className={testimonyStyle.testimonyperson}>Jaqueline Franco Geremia – Canta Maria Expresso e Masumi Sushi House</p>
                    </div>
                </div>
            </div>
            <div>
                <div className={testimonyStyle.testimonyblock}>
                    <div>
                        <p>“Eu conheci a Aposto Comunicação através de um cliente que temos em comum. Desde o primeiro contato já deu para perceber os diferenciais da Bruna, na condução dos eventos onde eram de minha responsabilidade, mas que devíamos trabalhar em parceira.</p>
                        <p>É incrível o comprometimento e o talento da equipe para o sucesso dos projetos. Também admiro muito a produção de conteúdo deles. Textos coerentes e sempre trazendo algo novo. Super indico esta agência e desejo sucesso sempre!”</p>
                        <p className={testimonyStyle.testimonyperson}>Vera Quadros – Promotora de Eventos</p>
                    </div>
                </div>
            </div>
            <div>
                <div className={testimonyStyle.testimonyblock}>
                    <div>
                        <p>“Paixão! Uma palavra que resume a essência da Aposto Comunicação, pois fazer aquilo que se ama, é fazer bem.</p>
                        <p>O envolvimento com as pautas propostas nos dá a garantia de um trabalho realizado com empatia, dedicação de corpo e alma. Por isso, sou grato à vida por ter permitido encontra-los, vida longa Aposto Comunicação!”</p>
                        <p className={testimonyStyle.testimonyperson}>Henrique Nuncio</p>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

export default TestimonyCarousel