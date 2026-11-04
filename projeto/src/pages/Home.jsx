import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section className="hero-panel">
        <div className="hero-content">
          <span className="eyebrow">Base Contábil • Setor 7</span>
          <h1>Domine sua missão financeira</h1>
          <p>Contabilidade estratégica para navegar pelos desafios da sua empresa com precisão, segurança e foco no crescimento.</p>
          <Link className="cta" to="/fale-conosco">Ativar comunicação</Link>
          <div className="service-grid">
            <article><h3>Abertura</h3><p>Missão de lançamento completa para sua empresa.</p></article>
            <article><h3>Fiscal</h3><p>Tributos sob controle em toda a galáxia.</p></article>
            <article><h3>Estratégia</h3><p>Dados claros para decisões de alto impacto.</p></article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
