import React from 'react'
import './Footer.css';
import RedesComponents from '../RedesComponents/RedesComponents';
// Remover la importación de MapLocation

const Footer = () => {
  // Función para abrir WhatsApp
  const handleContactar = () => {
    const numeroWhatsApp = "5491234567890"; // Cambia por tu número real
    const mensaje = "Hola! Me gustaría recibir más información sobre las clases de artes marciales. ¿Podrían ayudarme?";
    const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footer">
      {/* CTA Section en Footer */}
      <section className="footer-cta">
        <div className="container">
          <h3>¿Listo para comenzar?</h3>
          <p>Únete a nuestra comunidad de guerreros</p>
          <div className="footer-cta-buttons">
            <button 
              className="btn-outline-small"
              onClick={handleContactar}
            >
              Contactar
            </button>
          </div>
        </div>
      </section>
      
      {/* Remover MapLocation de aquí */}
      
      {/* Footer tradicional */}
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>🥋 Seishin Dojo</h3>
              <p>Donde comienza tu camino marcial.</p>
            </div>
            
       
            
            <div className="footer-section">
              <h4>Contacto</h4>
              <p>📧 info@seishindojo.com</p>
              <p>📞 +54 11 1234-5678</p>
            </div>
            
            <div className="footer-section">
              <h4>Síguenos</h4>
              <RedesComponents />
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Seishin Dojo. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;