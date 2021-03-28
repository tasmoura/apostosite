import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Sobre from '../components/Sobre'
import Testimony from '../components/Testimony'
import Servicos from '../components/Servicos'
import NoticiasDestaque from '../components/NoticiasDestaque'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Hero></Hero>
        <Sobre></Sobre>
        <Servicos></Servicos>
        <Testimony></Testimony>
        <NoticiasDestaque></NoticiasDestaque>
        <Contact></Contact>
    </div>
  )
}