import './DisciplinaItem.css';

const DisciplinaItem = ({ disciplina }) => {

  return (
    <div className="disciplina-item">
      {/* Imagen de la disciplina */}
      <div className="disciplina-imagen">
        <img src={disciplina.imagen} alt={disciplina.nombre} />
        <div className="disciplina-overlay">
          <span className="disciplina-origen">{disciplina.origen}</span>
        </div>
      </div>

      {/* Información de la disciplina */}
      <div className="disciplina-info">
        {/* Header */}
        <div className="disciplina-header-info">
          <h2>{disciplina.nombre}</h2>
        </div>
        
        <p className="disciplina-descripcion">{disciplina.descripcion}</p>
        
        <div className="disciplina-detalles">
          <div className="disciplina-nivel">
            <strong>Nivel:</strong> {disciplina.nivel}
          </div>
          <div className="disciplina-instructor">
            <strong>Instructor:</strong> {disciplina.instructor}
          </div>
        </div>

        {/* Beneficios */}
        <div className="disciplina-beneficios">
          <h3>Beneficios</h3>
          <ul>
            {disciplina.beneficios.map((beneficio, index) => (
              <li key={index}>{beneficio}</li>
            ))}
          </ul>
        </div>

        {/* Horarios */}
        <div className="disciplina-horarios">
          <h3>Horarios</h3>
          <div className="horarios-grid">
            {disciplina.horarios.map((horario, index) => (
              <div key={index} className="horario-item">
                <div className="horario-dia">{horario.dia}</div>
                <div className="horario-hora">{horario.hora}</div>
                <div className="horario-nivel">{horario.nivel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de acción - Dos botones */}
        <div className="disciplina-acciones">

        </div>
      </div>
    </div>
  );
};

export default DisciplinaItem;