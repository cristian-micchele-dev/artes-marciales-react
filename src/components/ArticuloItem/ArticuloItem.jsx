import React from 'react';
import './ArticuloItem.css';

const ArticuloItem = ({ imagen, titulo, fecha, descripcion, invertido }) => {
  return (
    <div className="articulo-item">
      {!invertido ? (
        // Imagen a la izquierda, texto a la derecha
        <>
          <div className="articulo-imagen">
            <img src={imagen} alt={titulo} />
          </div>
          <div className="articulo-info">
            <h2>{titulo}</h2>
            <p className="articulo-fecha">Publicado: {fecha}</p>
            {Array.isArray(descripcion) ? (
              descripcion.map((parrafo, index) => (
                <p key={index} className="articulo-descripcion">{parrafo}</p>
              ))
            ) : (
              <p className="articulo-descripcion">{descripcion}</p>
            )}
          </div>
        </>
      ) : (
        // Texto a la izquierda, imagen a la derecha (invertido)
        <>
          <div className="articulo-info">
            <h2>{titulo}</h2>
            <p className="articulo-fecha">Publicado: {fecha}</p>
            {Array.isArray(descripcion) ? (
              descripcion.map((parrafo, index) => (
                <p key={index} className="articulo-descripcion">{parrafo}</p>
              ))
            ) : (
              <p className="articulo-descripcion">{descripcion}</p>
            )}
          </div>
          <div className="articulo-imagen">
            <img src={imagen} alt={titulo} />
          </div>
        </>
      )}
    </div>
  );
};

export default ArticuloItem;