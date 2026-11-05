function Vagas() {
  const vagas = [
    ['Analista Contábil', 'Contabilidade • São Paulo'],
    ['Analista Fiscal Jr.', 'Fiscal • Híbrido'],
    ['Especialista em Customer Success', 'Relacionamento • Remoto'],
  ]

  return (
    <section className="careers-content jobs-list">
      {vagas.map(([titulo, detalhes]) => (
        <article key={titulo}>
          <div><h2>{titulo}</h2><p>{detalhes}</p></div>
          <a href="mailto:talentos@contabilidadesimples.com.br?subject=Candidatura">Ver vaga</a>
        </article>
      ))}
    </section>
  )
}

export default Vagas
