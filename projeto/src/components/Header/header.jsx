
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/contabilidade-logo-png-transparent.png'

function Header() {
  return (
    <>
      <header>
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo Contabilidade" />
            <span>Contabilidade Simples</span>
          </Link>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sobre-nos">Sobre Nós</NavLink>
            <NavLink to="/fale-conosco">Fale Conosco</NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header; 