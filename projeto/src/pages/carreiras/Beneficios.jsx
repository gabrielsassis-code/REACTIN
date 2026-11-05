function Beneficios() {
  const beneficios = ['Plano de saúde', 'Vale alimentação', 'Auxílio educação', 'Home office', 'Day off de aniversário', 'Programa de mentoria']
  return (
    <section className="careers-content benefits-grid">
      {beneficios.map((beneficio, index) => (
        <article key={beneficio}><span>0{index + 1}</span><h2>{beneficio}</h2></article>
      ))}
    </section>
  )
}

export default Beneficios
