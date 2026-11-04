function FaleConosco() {
  return (
    <main>
      <span className="eyebrow">Canal aberto</span>
      <h1>Fale Conosco</h1>
      <p>Envie sua mensagem para nossa equipe e iniciamos sua missão.</p>
      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <label>Nome<input type="text" name="name" placeholder="Seu nome" /></label>
        <label>E-mail<input type="email" name="email" placeholder="seu@email.com" /></label>
        <label>Mensagem<textarea name="message" rows="5" placeholder="Como podemos ajudar?"></textarea></label>
        <button className="cta" type="submit">Transmitir</button>
      </form>
    </main>
  )
}

export default FaleConosco
