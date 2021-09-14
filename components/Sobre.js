import sobreStyles from '../styles/Sobre.module.css'

function Sobre() {
    return (
        <section id="sobre" className={sobreStyles.sobrecont}>
            <div className={sobreStyles.col}>
                <h2>Quem somos?</h2>
                <p>Somos apaixonados por comunicação e co-fundadores dessa agência especializada em marketing. O papo aqui é marketing com vida, essência e propósito. Se você acredita que a sua marca merece uma estratégia voltada para humanização e fiel ao seu branding, aqui é o lugar certo pra você.</p>
                <p>A Aposto atua com comunicação integrada, envolvendo o marketing off-line e on-line. Isso engloba desde estratégia, conteúdo digital para mídias sociais, sites, assessoria de imprensa, fotografia, vídeos e ações de relacionamento.</p>
            </div>
            <div className={sobreStyles.col}>
                <img src='http://www.agenciaaposto.com/img/quemsomos.jpg' alt='homem e mulher tirando fotos.' />
            </div>
            <div className={sobreStyles.corpo}>
                <p>Agora que você já sabe o que podemos fazer pela sua empresa, gostaria de apresentar nosso time, afinal o seu contato conosco será próximo e frequente.</p>
                <p>A Bruna Maria de Moura é nossa diretora, mas podem chamar de Bru – ela adora! É uma comunicadora completa, com 8 anos de experiência, atuou em vários veículos de comunicação, como rádio, jornal impresso, assessoria de imprensa e agência de marketing. É especialista em gestão, marketing digital e imagem.</p>
                <p>Mas o importante mesmo é que ela é sempre a primeira pessoa a abraçar novas ideias. Preza pela proximidade com os clientes, é extremamente comunicativa e atenciosa. Com ela o impossível não existe!</p>
                <p>Já o Cris, é o nosso diretor estratégico, com 12 anos de experiência em comunicação, é o cara das grandes sacadas das campanhas de marketing. É jornalista e especialista em fotografia e vídeos.</p> 
                <p>Falar dele, é falar de criatividade pura, é o mais inovador de todos nós. Reservado e de pouco diálogo, é impecável nos job’s que abraça. Coloque um projeto na mão dele e você verá as ideias explodirem a cabeça.</p>
                <p>E ainda contamos com o nosso fiel escudeiro, o design gráfico e programador Thiago, especialista em modelagem e 3D há 8 anos. Calmo, bem humorado, é apaixonado por fantasia e história. Não dá pra deixar de dizer que ele é um viajante nato, atualmente reside em Portugal e é o braço direito da agência, remotamente.</p>
                <p>Além disso, damos voz e vez para parceiros terceirizados que prestam serviço frequentemente à agência. Afinal, o pensamento coletivo engrandece as ideias.</p>
            </div>
        </section>
    )
}

export default Sobre