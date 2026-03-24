import { NavLink } from 'react-router-dom'
import Logo from '../assets/logos/logo1.svg'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" end>
          <img className="header__logo" src={Logo} alt="Logo Kasa"/>
        </NavLink>

        <nav className="header__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            A propos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header