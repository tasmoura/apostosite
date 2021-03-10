import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Sobre from '../components/Sobre'
import Servicos from '../components/Servicos'
import NoticiasDestaque from '../components/NoticiasDestaque'

export default function Home() {
  return (
    <div>
        <Hero></Hero>
        <Sobre></Sobre>
        <Servicos></Servicos>
        <NoticiasDestaque></NoticiasDestaque>
        <Contact></Contact>
    </div>
  )
}