import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import AikidoVideo from '/src/assets/Header//headerMartial.avif';

const DynamicHeader = ({ children }) => {
  const location = useLocation();
  
  // Configuración de videos y títulos por ruta
  const getHeaderConfig = () => {
    switch (location.pathname) {
      case '/':
        return {
          videoSrc: '/src/assets/Header/istockphoto-853278976-640_adpp_is.mp4',
          title: 'Seishin Dojo',
          subtitle: 'Academia de Artes Marciales'
        };
      case '/disciplinas':
        return {
          videoSrc: '/src/assets/Header/JudoVideo.mp4', // Añade tu video de disciplinas
          title: 'Nuestras Disciplinas',
          subtitle: 'Encuentra tu arte marcial ideal'
        };
      case '/articulos':
        return {
          videoSrc: '/src/assets/Header/articulos-video.mp4', // Añade tu video de artículos
          title: 'Artículos y Noticias',
          subtitle: 'Mantente informado sobre artes marciales'
        };
      default:
        return {
          videoSrc: '/src/assets/Header/istockphoto-853278976-640_adpp_is.mp4',
          title: 'Seishin Dojo',
          subtitle: 'Academia de Artes Marciales'
        };
    }
  };
  
  const { videoSrc, title, subtitle } = getHeaderConfig();
  
  return (
    <Header videoSrc={videoSrc} title={title} subtitle={subtitle}>
      {children}
    </Header>
  );
};

export default DynamicHeader;