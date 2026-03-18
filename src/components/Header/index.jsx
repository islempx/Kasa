import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/LOGO.png'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} className="header-logo" alt='logo Kasa'/>
        <nav className="nav">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/About" className="nav-link">À propos</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header