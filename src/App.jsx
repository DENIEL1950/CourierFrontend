import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Ayuda from './components/Ayuda';
import Register from './components/Register';
import Login from './components/Login';
import Cotizar from './components/Cotizar';
import InOut from './components/InOut';
import ComoFunciona from './components/ComoFunciona';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<InOut />} /> {/* Ruta principal */}
          <Route path="/InOut" element={<InOut />} /> {/* Ruta explícita para el componente */}
          <Route path="/ComoFunciona" element={<ComoFunciona />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cotizar" element={<Cotizar />} />
          <Route path="/Ayuda" element={<Ayuda />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
