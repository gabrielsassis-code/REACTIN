import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/contabilidade-logo-png-transparent.png'

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={Logo} alt="Logo Contabilidade" />
        <span>Contabilidade Simples</span>
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sobre-nos">Sobre Nós</NavLink>
        <NavLink to="/servicos">Serviços</NavLink>
        <NavLink to="/fale-conosco">Fale Conosco</NavLink>
        <NavLink to="/trabalhe-conosco">Trabalhe Conosco</NavLink>
      </nav>
      <p>&copy; {new Date().getFullYear()} Contabilidade Simples</p>
    </footer>
  )
}

export default Footer
