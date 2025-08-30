import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/disciplinas" className="nav-link">
              Disciplinas
            </Link>
          </li>
          <li>
            <Link to="/articulos" className="nav-link">
              Artículos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;