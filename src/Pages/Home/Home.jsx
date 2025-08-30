import { useNavigate } from 'react-router-dom';
import './Home.css';
import DisciplinasSection from '../../components/DisciplinasSection/DisciplinasSection';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import Testimonios from '../../components/Testimonios/Testimonios';
import MapLocation from '../../components/MapLocation/MapLocation';

const Home = () => {
  const navigate = useNavigate();

  const handleStartTraining = () => {
    navigate('/disciplinas'); // Navegar a la página de disciplinas
  };

  return (
    <div className="home">
      {/* Sección Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a Seishin Dojo</h1>
          <p className="hero-subtitle">
            Descubre tu fuerza interior y domina las técnicas ancestrales de las artes marciales
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleStartTraining}>
              Comenzar Entrenamiento
            </button>
          </div>
        </div>
      </section>

      {/* Usar el componente DisciplinasSection */}
      <DisciplinasSection />

      {/* Componente Benefits separado */}
      <BenefitsSection />

      {/* Componente Testimonios separado */}
      <Testimonios />

      {/* Componente MapLocation agregado */}
      <MapLocation />
    </div>
  );
};

export default Home;