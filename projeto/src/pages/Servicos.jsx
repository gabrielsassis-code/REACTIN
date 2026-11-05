import { Link } from 'react-router-dom'

function Servicos() {
  return (
    <main>
      <span className="eyebrow">Nossos serviços</span>
      <h1>Serviços Contábeis</h1>
      <p>Soluções completas para manter sua empresa regular, organizada e preparada para crescer.</p>
      <div className="service-grid">
        <article>
          <h3>Contabilidade mensal</h3>
          <p>Registro de operações, demonstrações financeiras e acompanhamento contábil contínuo.</p>
        </article>
        <article>
          <h3>Departamento fiscal</h3>
          <p>Apuração de impostos, entrega de obrigações e gestão de documentos fiscais.</p>
        </article>
        <article>
          <h3>Consultoria empresarial</h3>
          <p>Análises e orientações estratégicas para melhorar resultados e apoiar decisões.</p>
        </article>
      </div>
      <Link className="cta" to="/fale-conosco">Solicitar orçamento</Link>
    </main>
  )
}

export default Servicos
