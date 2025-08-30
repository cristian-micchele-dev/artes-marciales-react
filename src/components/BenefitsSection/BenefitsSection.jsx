import './BenefitsSection.css';

const BenefitsSection = () => {
  // Array de beneficios (fácil de mantener y agregar más)
  const beneficios = [
    {
      id: 1,
      icono: "🏆",
      titulo: "Instructores Certificados",
      descripcion: "Maestros con años de experiencia y certificaciones internacionales."
    },
    {
      id: 2,
      icono: "👨‍👩‍👧‍👦",
      titulo: "Para Todas las Edades",
      descripcion: "Clases adaptadas desde niños de 4 años hasta adultos mayores."
    },
    {
      id: 3,
      icono: "🏠",
      titulo: "Ambiente Familiar",
      descripcion: "Un espacio seguro y acogedor donde todos se sienten bienvenidos."
    },
    {
      id: 4,
      icono: "📅",
      titulo: "Horarios Flexibles",
      descripcion: "Clases matutinas, vespertinas y de fin de semana."
    },
    {
      id: 5,
      icono: "💪",
      titulo: "Resultados Garantizados",
      descripcion: "Metodología probada que te ayudará a alcanzar tus objetivos."
    },
    {
      id: 6,
      icono: "🎯",
      titulo: "Clases Personalizadas",
      descripcion: "Atención individualizada según tu nivel y necesidades."
    }
  ];

  return (
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-header">
          <h2>¿Por qué elegir nuestro dojo?</h2>
          <p>Descubre las razones que nos hacen únicos</p>
        </div>
        
        <div className="benefits-grid">
          {beneficios.map(beneficio => (
            <div key={beneficio.id} className="benefit-card">
              <div className="benefit-icon">{beneficio.icono}</div>
              <h3 className="benefit-title">{beneficio.titulo}</h3>
              <p className="benefit-description">{beneficio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;