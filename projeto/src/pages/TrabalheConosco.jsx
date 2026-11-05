import { NavLink, Outlet } from 'react-router-dom'

function TrabalheConosco() {
  return (
    <main className="careers-page">
      <span className="eyebrow">Equipe Contabilidade Simples</span>
      <h1>Trabalhe Conosco</h1>
      <p className="careers-intro">Construa uma carreira com propósito, tecnologia e pessoas que acreditam em crescimento de verdade.</p>

      <nav className="careers-nav" aria-label="Seções de carreira">
        <NavLink to="/trabalhe-conosco" end>Cultura</NavLink>
        <NavLink to="/trabalhe-conosco/vagas">Vagas abertas</NavLink>
        <NavLink to="/trabalhe-conosco/beneficios">Benefícios</NavLink>
        <NavLink to="/trabalhe-conosco/candidatar">Candidate-se</NavLink>
      </nav>

      <Outlet />
    </main>
  )
}

export default TrabalheConosco
