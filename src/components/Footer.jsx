import LogoFooter from '../assets/logos/logo2.svg'
import LogoFooterMobile from '../assets/logos/logo3mobile.svg'

function Footer() {
  return (
    <footer className="footer">
      <picture>
        <source media="(max-width: 768px)" srcSet={LogoFooterMobile} />
        <img className="footer__logo" src={LogoFooter} alt="Logo Kasa © 2020 Kasa. All rights reserved" />
      </picture>
    </footer>
  )
}

export default Footer