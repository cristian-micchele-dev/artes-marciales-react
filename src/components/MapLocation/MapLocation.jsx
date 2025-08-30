import React from 'react';
import './MapLocation.css';

const MapLocation = () => {
  return (
    <section className="map-location">
      <div className="container">
        <div className="location-content">
          <div className="location-info">
            <h3>📍 Dónde estamos </h3>
            <div className="address-info">
              <p><strong>Seishin Dojo</strong></p>
              <p>Av. Corrientes 1234, Buenos Aires</p>
              <p>Ciudad Autónoma de Buenos Aires, Argentina</p>
              <div className="contact-details">
                <p>📞 +54 11 1234-5678</p>
                <p>📧 info@seishindojo.com</p>
              </div>
              <div className="schedule">
                <h4>Horarios de Atención:</h4>
                <p>Lunes a Viernes: 6:00 - 22:00</p>
                <p>Sábados: 8:00 - 12:00</p>
              </div>
            </div>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168908537944!2d-58.38375908477033!3d-34.60373998045859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb9f8ff113%3A0x22fd08da6711928d!2sAv.%20Corrientes%201234%2C%20C1043%20CABA%2C%20Argentina!5e0!3m2!1ses!2sar!4v1647890123456!5m2!1ses!2sar"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Seishin Dojo"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;