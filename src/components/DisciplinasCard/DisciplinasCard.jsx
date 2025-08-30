import React from 'react';
import './DisciplinasCard.css';

const DisciplinasCard = ({ imagen, titulo, descripcion, onClick }) => {
  return (
    <div className="discipline-card" onClick={onClick}>
      {/* Imagen */}
      <div className="discipline-image-container">
        <img 
          src={imagen} 
          alt={titulo}
          className="discipline-image"
        />
        <div className="discipline-overlay">
          <span className="discipline-name">{titulo}</span>
        </div>
      </div>
      
      {/* Contenido sin botón */}
      <div className="discipline-content">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default DisciplinasCard;