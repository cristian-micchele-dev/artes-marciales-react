import React from 'react';
import './Articulos.css';
import ArticuloItem from '../../components/ArticuloItem/ArticuloItem';

// Importar los datos de los artículos
import { articulosData } from '../../data/articulosData';

const Articulos = () => {
  return (
    <div className="articulos-page">
      <div className="articulos-header">
        <h1>Artículos sobre Artes Marciales</h1>
        <p>Conoce más sobre la filosofía y técnicas de las artes marciales</p>
      </div>

      <div className="articulos-container">
        {articulosData.map(articulo => (
          <ArticuloItem 
            key={articulo.id}
            imagen={articulo.imagen}
            titulo={articulo.titulo}
            fecha={articulo.fecha}
            descripcion={articulo.descripcion}
            invertido={articulo.invertido}
          />
        ))}
      </div>
    </div>
  );
};

export default Articulos;