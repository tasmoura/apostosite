//section 'Depoimentos'

import testimonyStyle from '../styles/Testimony.module.css'
import TestimonyCarousel from '../components/TestimonyCarousel'

function Testimony() {
    return (
        <section id="depoimentos" className={testimonyStyle.testimonycont}>
            <h2>Parceiros</h2>
            <TestimonyCarousel></TestimonyCarousel>
        </section>
    )
}

export default Testimony