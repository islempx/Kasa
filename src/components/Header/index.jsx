import { NavLink } from 'react-router-dom'
import logo from '../../assets/LOGO.png'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} className="header-logo" alt='logo Kasa'/>

        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            À propos
          </NavLink>
        </nav>

      </div>
    </header>
  )
}

export default Header