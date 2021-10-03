import servicosStyles from '../styles/Servicos.module.css'

function Servicos() {
    return (
        <section id="servicos" className={servicosStyles.servicoscont}>
            <h2>Produtos</h2>
            <div>
                <div className={servicosStyles.col}>
                    <ul>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon1.svg' alt='icone' />
                            </div>
                            <div>
                                <p><span>Marketing Off-line</span></p>
                                <p className={servicosStyles.small}>envolve ações estratégicas de engajamento da marca com o consumidor.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon2.svg' alt='icone' />
                            </div>
                            <div>
                                <p><span>Marketing Digital</span></p>
                                <p className={servicosStyles.small}>envolve geração de conteúdo para redes sociais, sites, blogs e Youtube.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon3.svg' alt='icone' />
                            </div>
                            <div>
                                <p><span>Assessoria de comunicação</span></p>
                                <p className={servicosStyles.small}>envolve o desenvolvimento de relacionamento entre marcas e seus colaboradores, veículos de comunicação e com os consumidores.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon4.svg' alt='icone' />
                            </div>
                            <div>
                                <p><span>Sites</span></p>
                                <p className={servicosStyles.small}>criação de sites e e-commerce.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={servicosStyles.col}>
                    <ul>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon5.svg' alt='icone' />
                            </div>
                            <div>
                                <p><span>Vídeos</span></p>
                                <p className={servicosStyles.small}>produção de vídeo institucional e publicitário.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon6.svg' alt='icone' />
                            </div>
                            <div>
                                <p><span>Fotografia</span></p>
                                <p className={servicosStyles.small}>Fotos profissionais e publicitárias.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon7.svg' alt='icone' />
                            </div>
                            <div>
                                <p><span>Estratégia de comunicação</span></p>
                                <p className={servicosStyles.small}>Desenvolvimento de estratégias de comunicação de marcas.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Servicos