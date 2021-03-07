import ContactStyles from '../styles/Contact.module.css'

function Contact() {
    return (
        <section className={ContactStyles.ContactSection} id="contato">
            <h2>Fale Conosco</h2>
            <form method='POST' action='/Contact.php'>
                <input name='nome' type='text' placeholder='Seu Nome' required/>
                <input name='email' type='email' placeholder='Seu Email' required/>
                <textarea name='message' placeholder='Sua Mensagem'></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contact