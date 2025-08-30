# 🥋 Seishin Dojo - Academia de Artes Marciales

## 📋 Descripción
Aplicación web desarrollada con **React + Vite** para una academia de artes marciales.  
Incluye información sobre disciplinas, instructores, artículos y servicios, con diseño **responsive** y navegación SPA.

---

## 🚀 Tecnologías
- React 19.1.1  
- Vite 7.1.2  
- React Router DOM 7.8.2  
- CSS3 + Variables personalizadas  
- Google Fonts (Oswald, Inter, Montserrat, Noto Serif JP)  
- ESLint 9.33.0  
- npm  

---

## 📄 Rutas
- 🏠 **/** → Home con hero (video), disciplinas destacadas, beneficios, testimonios y mapa  
- 🥋 **/disciplinas** → Lista de artes marciales y detalles por disciplina  
- 📰 **/articulos** → Blog con noticias y artículos  
- 👨‍🏫 **/instructores** → Perfiles de instructores *(en desarrollo)*  
- 📞 **/contacto** → Información de contacto *(en desarrollo)*  

---

## ⚛️ Componentes Principales
- **DynamicHeader** → Header dinámico que cambia según la ruta  
- **HamburgerMenu** → Menú responsive para móviles  
- **DisciplinasCard / DisciplinaItem / DisciplinasList** → Renderizado de disciplinas  
- **ArticuloItem** → Componente individual de artículo  
- **BenefitsSection** → Beneficios de entrenar en el dojo  
- **Testimonios** → Opiniones de estudiantes  
- **MapLocation** → Google Maps con ubicación del dojo  
- **WhatsAppButton** → Botón flotante para contacto directo  
- **RedesComponents** → Íconos con enlaces a redes sociales  
- **Footer / Navbar / Logo / Header** → Elementos de navegación y branding  

---

## ✨ Funcionalidades
- SPA con React Router  
- Header dinámico con videos  
- Botón flotante de WhatsApp  
- Mapa interactivo con Google Maps  
- Secciones de disciplinas, beneficios y testimonios  
- Diseño responsive y navegación móvil  

---

## 🛠️ Instalación
```bash
# Clonar repo
git clone https://github.com/tu-usuario/seishin-dojo.git
cd seishin-dojo

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build
npm run preview

📝 Licencia
Proyecto bajo MIT License.