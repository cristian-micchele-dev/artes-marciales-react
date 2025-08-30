import './Testimonios.css';

const Testimonios = () => {
  // Array de testimonios (fácil de mantener)
  const testimoniosData = [
    {
      id: 1,
      texto: "El mejor dojo de la ciudad. Los instructores son increíbles y el ambiente es muy familiar.",
      autor: "María González",
      disciplina: "Karate"
    },
    {
      id: 2,
      texto: "Mi hijo ha ganado mucha confianza desde que empezó. Excelente lugar para aprender.",
      autor: "Carlos Rodríguez",
      disciplina: "Padre"
    },
    {
      id: 3,
      texto: "Después de 2 años entrenando aquí, puedo decir que cambió mi vida completamente.",
      autor: "Ana Martín",
      disciplina: "Taekwondo"
    }
  ];

  return (
    <section className="testimonios">
      <div className="container">
        <h2>Experiencias en el Dojo</h2>
        
        <div className="testimonios-grid">
          {testimoniosData.map(testimonio => (
            <div key={testimonio.id} className="testimonio">
              <p className="testimonio-texto">"{testimonio.texto}"</p>
              <div className="testimonio-autor">
                - {testimonio.autor}, {testimonio.disciplina}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;