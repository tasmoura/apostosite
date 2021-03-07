import sobreStyles from '../styles/Sobre.module.css'

function Sobre() {
    return (
        <section id="sobre" className={sobreStyles.sobrecont}>
            <div className={sobreStyles.col}>
                <h2>Quem somos?</h2>
                <p>A Aposto Comunicação é uma empresa que atua em assessoria de imprensa, geração de conteúdo, mídias digitais, fotografia e consultoria de relacionamento institucional.</p>
                <p>Diante da importância das plataformas digitais para o crescimento das empresas, atuamos forte no monitoramento de dados e gerenciamento das redes sociais, bem como o marketing digital.</p>
            </div>
            <div className={sobreStyles.col}>
                <img src='http://www.agenciaaposto.com/img/quemsomos.jpg' alt='homem e mulher tirando fotos.' />
            </div>
            <div>
                
            </div>
        </section>
    )
}

export default Sobre