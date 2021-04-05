import ContactStyles from '../styles/Contact.module.css'
import { useState } from 'react'

//this function fetch php hosted code to send email. This resource was used to safe credentials after export the website to static version.
function Contact() {
    const [formResult,setFormResult] = useState();

    const submitBtn = function(e){
        e.preventDefault();
        fetch(
            '/Contact/sendemail.php',
            {body: new FormData (e.target), method:'POST'}
        )
        .then(
            function(response){
                return(
                    response.text().then( function(data){
                        console.log(data);
                        setFormResult(data);
                    } )
                )
            }
        )
    }

    return (
        <section className={ContactStyles.ContactSection} id="contato">
            <h2>Fale Conosco</h2>
            <form method='POST' onSubmit={submitBtn}>
                <input name='nome' type='text' placeholder='Seu Nome' required/>
                <input name='email' type='email' placeholder='Seu Email' required/>
                <textarea name='mensagem' placeholder='Sua Mensagem'></textarea>
                <button type="submit">Enviar</button>
            </form>
            <p>{formResult}</p>
        </section>
    )
}

export default Contact