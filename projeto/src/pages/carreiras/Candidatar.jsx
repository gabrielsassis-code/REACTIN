function Candidatar() {
  return (
    <section className="careers-content">
      <form className="contact-form career-form" onSubmit={(event) => event.preventDefault()}>
        <label>Nome completo<input type="text" name="name" placeholder="Seu nome" required /></label>
        <label>E-mail<input type="email" name="email" placeholder="seu@email.com" required /></label>
        <label>Área de interesse<select name="area" defaultValue=""><option value="" disabled>Selecione uma área</option><option>Contabilidade</option><option>Fiscal</option><option>Atendimento</option><option>Produtos</option></select></label>
        <label>LinkedIn<input type="url" name="linkedin" placeholder="linkedin.com/in/seu-perfil" /></label>
        <label>Mensagem<textarea name="message" rows="4" placeholder="Conte um pouco sobre você"></textarea></label>
        <button className="cta" type="submit">Enviar candidatura</button>
      </form>
    </section>
  )
}

export default Candidatar
