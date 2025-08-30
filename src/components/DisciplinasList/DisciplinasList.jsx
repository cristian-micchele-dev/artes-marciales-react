import DisciplinaItem from '../DisciplinaItem/DisciplinaItem';
import './DisciplinasList.css';

const DisciplinasList = ({ disciplinas }) => {
  return (
    <div className="disciplinas-container">
      {disciplinas.map((disciplina) => (
        <DisciplinaItem 
        
          key={disciplina.id} 
          disciplina={disciplina}
          // Removido isReversed - ya no es necesario
        />
      ))}
    </div>
  );
};

export default DisciplinasList;