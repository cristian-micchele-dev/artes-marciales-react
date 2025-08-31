

import './Header.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Header = ({ children, videoSrc, title, subtitle }) => {
  return (
    <header className="header">
      {/* Video header dinámico */}
      <video 
        className="header-video"
        autoPlay 
        muted 
        loop 
        playsInline
        preload="metadata" // Carga metadatos rápidamente
        poster="" // Poster vacío para evitar imagen por defecto
        key={videoSrc}
        onLoadedData={() => {
          // Asegurar que el video esté listo
          console.log('Video cargado');
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="header-overlay"></div>
      
      {/* Menú hamburguesa en la esquina superior derecha */}
      <HamburgerMenu />
      
      {/* Título del header dinámico */}
      <div className="header-content">
        <div className="header-title-container">
          <h1 className="header-main-title">{title}</h1>
          <div className="header-divider"></div>
          <p className="header-subtitle">{subtitle}</p>
        </div>
      </div>
      
      {/* Navbar */}
      {children}
    </header>
  );
};

export default Header;