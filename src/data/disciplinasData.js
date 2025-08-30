import karate from '/src/assets/Cards/karate.jpg';
import Aikido from '/src/assets/Cards/aikido.jpg';
import Judo from '/src/assets/Cards/Judo2.jpeg';
import JiujitsuBr from '/src/assets/Cards/jiu-jitsu-brasileno.jpg';
import MuayThai from '/src/assets/Cards/MuayThai.jpg';
import Taekwondo from '/src/assets/Cards/taekwondo.png';

export const disciplinasData = [
  {
    id: 1,
    nombre: "Karate",
    imagen: karate,
    descripcion: "Arte marcial tradicional japonés que enfatiza técnicas de golpeo, patadas, bloqueos y defensa personal. Desarrolla disciplina, respeto y autocontrol.",
    origen: "Japón",
    nivel: "Principiante a Avanzado",
    beneficios: [
      "Mejora la coordinación y equilibrio",
      "Desarrolla fuerza y flexibilidad",
      "Aumenta la confianza y autoestima",
      "Enseña disciplina y respeto",
      "Excelente para defensa personal"
    ],
    horarios: [
      { dia: "Lunes", hora: "18:00 - 19:30", nivel: "Principiante" },
      { dia: "Miércoles", hora: "18:00 - 19:30", nivel: "Principiante" },
      { dia: "Viernes", hora: "19:30 - 21:00", nivel: "Avanzado" },
    ],
   
    instructor: "Sensei Carlos Martínez"
  },
  {
    id: 2,
    nombre: "Taekwondo",
    imagen: Taekwondo,
    descripcion: "Arte marcial coreano conocido por sus espectaculares técnicas de patadas altas y acrobáticas. Desarrolla flexibilidad, velocidad y precisión.",
    origen: "Corea del Sur",
    nivel: "Principiante a Avanzado",
    beneficios: [
      "Desarrolla flexibilidad excepcional",
      "Mejora la velocidad y agilidad",
      "Fortalece las piernas y core",
      "Aumenta la concentración mental",
      "Excelente ejercicio cardiovascular"
    ],
    horarios: [
      { dia: "Martes", hora: "17:00 - 18:30", nivel: "Principiante" },
      { dia: "Jueves", hora: "17:00 - 18:30", nivel: "Principiante" },
      { dia: "Martes", hora: "19:00 - 20:30", nivel: "Avanzado" },
    ],
    precio: "$85/mes",
    instructor: "Maestro Ana Kim"
  },
  {
    id: 3,
    nombre: "Jiu-Jitsu Brasileño",
    imagen: JiujitsuBr,
    descripcion: "Arte marcial brasileño que se enfoca en técnicas de suelo, sumisiones y defensa personal. Ideal para todas las edades y tamaños.",
    origen: "Brasil",
    nivel: "Principiante a Avanzado",
    beneficios: [
      "Excelente para defensa personal",
      "Desarrolla fuerza funcional",
      "Mejora la resistencia mental",
      "Técnicas efectivas para cualquier tamaño",
      "Reduce el estrés significativamente"
    ],
    horarios: [
      { dia: "Lunes", hora: "20:00 - 21:30", nivel: "Principiante" },
      { dia: "Miércoles", hora: "20:00 - 21:30", nivel: "Intermedio" },
      { dia: "Viernes", hora: "18:00 - 19:30", nivel: "Avanzado" }
    ],

    instructor: "Professor Miguel Santos"
  },
  {
    id: 4,
    nombre: "Muay Thai",
    imagen: MuayThai,
    descripcion: "Arte marcial tailandés conocido como 'el arte de los ocho miembros'. Utiliza puños, codos, rodillas y espinillas para un entrenamiento completo.",
    origen: "Tailandia",
    nivel: "Principiante a Avanzado",
    beneficios: [
      "Entrenamiento cardiovascular intenso",
      "Desarrolla potencia explosiva",
      "Fortalece todo el cuerpo",
      "Mejora la coordinación",
      "Excelente para quemar calorías"
    ],
    horarios: [
      { dia: "Martes", hora: "19:00 - 20:30", nivel: "Principiante" },
      { dia: "Jueves", hora: "19:00 - 20:30", nivel: "Intermedio" },
      { dia: "Viernes", hora: "20:00 - 21:30", nivel: "Avanzado" },
    ],
  
    instructor: "Kru David Thompson"
  },
  {
    id: 5,
    nombre: "Aikido",
    imagen: Aikido,
    descripcion: "Arte marcial japonés que enfatiza la armonía y el uso de la energía del oponente. Se centra en técnicas de proyección, inmovilización y desarme.",
    origen: "Japón",
    nivel: "Principiante a Avanzado",
    beneficios: [
      "Desarrolla equilibrio y coordinación",
      "Mejora la flexibilidad y postura",
      "Enseña autocontrol y paciencia",
      "Reduce el estrés y la ansiedad",
      "Técnicas efectivas de defensa personal"
    ],
    horarios: [
      { dia: "Lunes", hora: "19:00 - 20:30", nivel: "Principiante" },
      { dia: "Miércoles", hora: "19:00 - 20:30", nivel: "Intermedio" },
      { dia: "Viernes", hora: "17:00 - 18:30", nivel: "Avanzado" },
    ],

    instructor: "Sensei María Tanaka"
  },
  {
    id: 6,
    nombre: "Judo",
    imagen: Judo,
    descripcion: "Arte marcial y deporte olímpico japonés que se enfoca en técnicas de proyección, control en el suelo y sumisiones. Desarrolla fuerza y técnica.",
    origen: "Japón",
    nivel: "Principiante a Avanzado",
    beneficios: [
      "Desarrolla fuerza funcional completa",
      "Mejora el equilibrio y coordinación",
      "Enseña disciplina y respeto",
      "Excelente ejercicio cardiovascular",
      "Técnicas efectivas de autodefensa"
    ],
    horarios: [
      { dia: "Martes", hora: "18:00 - 19:30", nivel: "Principiante" },
      { dia: "Jueves", hora: "18:00 - 19:30", nivel: "Intermedio" },
      { dia: "Sábado", hora: "14:00 - 15:30", nivel: "Avanzado" },
    ],
 
    instructor: "Sensei Roberto Yamamoto"
  }
];