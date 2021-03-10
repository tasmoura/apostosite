import servicosStyles from '../styles/Servicos.module.css'

function Servicos() {
    return (
        <section id="servicos" className={servicosStyles.servicoscont}>
            <h2>Serviços</h2>
            <div>
                <div className={servicosStyles.col}>
                    <h3>Social media</h3>
                    <ul>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon1.png' alt='icone' />
                            </div>
                            <div>
                                <p><span>Estratégia</span> em redes sociais</p>
                                <p className={servicosStyles.small}>Transformar <em>likes</em> em vendas</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon2.png' alt='icone' />
                            </div>
                            <div>
                                <p><span>Criatividade</span> para engajamento</p>
                                <p className={servicosStyles.small}>Atrair mais <em>leads</em></p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon3.png' alt='icone' />
                            </div>
                            <div>
                                <p>Ações de <span>impacto</span></p>
                                <p className={servicosStyles.small}>Gerar reconhecimento</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon4.png' alt='icone' />
                            </div>
                            <div>
                                <p>Presente em todas as <span>mídias</span></p>
                                <p className={servicosStyles.small}>Celular, tablet e notebook</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={servicosStyles.col}>
                    <h3>Acessoria de comunicação</h3>
                    <ul>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon5.png' alt='icone' />
                            </div>
                            <div>
                                <p>Administra a divulgação de informação entre um cliente, produto, empresa e público</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon6.png' alt='icone' />
                            </div>
                            <div>
                                <p>Conquista credibilidade e promove o relacionamento junto ao seu público-alvo</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src='http://www.agenciaaposto.com/img/icon7.png' alt='icone' />
                            </div>
                            <div>
                                <p>Um trabalho de comunicação bem feito zela pela imagem institucional, gerando mais vendas e engajamento, além de fortalecer a marca</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Servicos