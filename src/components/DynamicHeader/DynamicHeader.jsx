import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';

const DynamicHeader = ({ children }) => {
  const location = useLocation();
  
  // Configuración de videos y títulos por ruta
  const getHeaderConfig = () => {
    switch (location.pathname) {
      case '/':
        return {
          videoSrc: '/videos/istockphoto-853278976-640_adpp_is.mp4',
          title: 'Seishin Dojo',
          subtitle: 'Academia de Artes Marciales'
        };
      case '/disciplinas':
        return {
          videoSrc: '/videos/JudoVideo2.mp4',
          title: 'Nuestras Disciplinas',
          subtitle: 'Encuentra tu arte marcial ideal'
        };
      case '/articulos':
        return {
          videoSrc: '/videos/articulos-video.mp4',
          title: 'Artículos y Noticias',
          subtitle: 'Mantente informado sobre artes marciales'
        };
      default:
        return {
          videoSrc: '/videos/istockphoto-853278976-640_adpp_is.mp4',
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