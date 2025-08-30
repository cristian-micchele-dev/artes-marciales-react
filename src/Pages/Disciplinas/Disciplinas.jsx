import React from 'react'
import DisciplinasList from '../../components/DisciplinasList/DisciplinasList';
import { disciplinasData } from '../../data/disciplinasData';
import './Disciplinas.css';

const Disciplinas = () => {
  return (
    <div className="disciplinas-page">
      {/* Header de la página */}
      <div className="disciplinas-header">
        <h1>Nuestras Disciplinas</h1>
        <p>Descubre el arte marcial perfecto para ti</p>
      </div>

      {/* Lista de disciplinas */}
      <DisciplinasList disciplinas={disciplinasData} />
    </div>
  );
};

export default Disciplinas;