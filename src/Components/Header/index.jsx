import "./Header.scss";
import Logo from "../../assets/logo.png";
import { useState } from "react";

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <a href="/">
        <img src={Logo} />
      </a>

      <nav>
        <a href="/" className={props.underlineLink[0]}>
          Home
        </a>
        <a href="#" className={props.underlineLink[1]}>
          Contatos
        </a>
        <a href="#" className={props.underlineLink[2]}>
          Produtos
        </a>
      </nav>

      <div className="mobile-menu">
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`menu-panel ${menuOpen ? "show" : ""}`}>
          <a href="/" onClick={toggleMenu}>
            Home
          </a>
          <a href="#" onClick={toggleMenu}>
            Contatos
          </a>
          <a href="#" onClick={toggleMenu}>
            Produtos
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
