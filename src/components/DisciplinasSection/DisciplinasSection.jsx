import DisciplinasCard from '../DisciplinasCard/DisciplinasCard';
import './DisciplinasSection.css';

// Importar las imágenes
import KarateImg from '/src/assets/Cards/karate.jpg';
import TaekwondoImg from '/src/assets/Cards/Taekwondo.png';
import JiuJitsuImg from '/src/assets/Cards/jiu-jitsu-brasileno.jpg';
import MuayThaiImg from '/src/assets/Cards/MuayThai.jpg';
import AikidoImg from '/src/assets/Cards/Aikido.jpeg';
import JudoImg from '/src/assets/Cards/Judo.jpg';

const DisciplinasSection = () => {
  // Array de 6 disciplinas para 2 filas de 3
  const disciplinas = [
    {
      id: 1,
      imagen: KarateImg,
      titulo: "Karate",
      descripcion: "Arte marcial tradicional japonés enfocado en técnicas de golpeo y defensa personal."
    },
    {
      id: 2,
      imagen: TaekwondoImg,
      titulo: "Taekwondo",
      descripcion: "Arte marcial coreano especializado en técnicas de patadas y flexibilidad."
    },
    {
      id: 3,
      imagen: JiuJitsuImg,
      titulo: "Jiu-Jitsu",
      descripcion: "Arte marcial brasileño centrado en técnicas de suelo y sumisión."
    },
    {
      id: 4,
      imagen: MuayThaiImg,
      titulo: "Muay Thai",
      descripcion: "Arte marcial tailandés conocido como 'el arte de los ocho miembros'."
    },
    {
      id: 5,
      imagen: AikidoImg,
      titulo: "Aikido",
      descripcion: "Arte marcial japonés centrado en técnicas de defensa y armonía."
    },
    {
      id: 6,
      imagen: JudoImg,
      titulo: "Judo",
      descripcion: "Arte marcial japonés enfocado en técnicas de proyección y control."
    }
  ];
  

  return (
    <section className="disciplinas-section">
      <div className="container">
        <div className="disciplinas-header">
          <h2>Nuestras Disciplinas</h2>
          <p>Explora las diferentes artes marciales que enseñamos</p>
        </div>
        
        {/* Grid de 3 columnas */}
        <div className="disciplines-grid">
          {disciplinas.map(disciplina => (
            <DisciplinasCard
              key={disciplina.id}
              imagen={disciplina.imagen}
              titulo={disciplina.titulo}
              descripcion={disciplina.descripcion}
              onClick={() => handleDisciplinaClick(disciplina)}
            />
          ))}
        </div>
 
      </div>
    </section>
  );
};

export default DisciplinasSection;