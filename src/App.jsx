import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DynamicHeader from './components/DynamicHeader/DynamicHeader';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Disciplinas from './Pages/Disciplinas/Disciplinas';
import Articulos from './Pages/Articulos/Articulos';

import './App.css';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="App">
        <DynamicHeader>
          <Navbar />
        </DynamicHeader>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disciplinas" element={<Disciplinas />} />
            <Route path="/articulos" element={<Articulos />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
