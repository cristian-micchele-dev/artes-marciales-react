import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Bloquear el scroll del body cuando el modal está abierto
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <div className="hamburger-wrapper">
      {/* Botón hamburguesa */}
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menú de navegación"
        aria-expanded={isOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Modal del menú */}
      {isOpen && (
        <div className="menu-modal">
          <div className="modal-content">
            <button className="close-button" onClick={toggleMenu}>
              &times;
            </button>
            <nav className="modal-nav">
              <ul className="modal-nav-menu">
                <li>
                  <Link to="/" className="modal-nav-link" onClick={toggleMenu}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/disciplinas" className="modal-nav-link" onClick={toggleMenu}>
                    Disciplinas
                  </Link>
                </li>
                <li>
                  <Link to="/articulos" className="modal-nav-link" onClick={toggleMenu}>
                    Artículos
                  </Link>
                </li>
                {/* Puedes agregar más enlaces aquí */}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;