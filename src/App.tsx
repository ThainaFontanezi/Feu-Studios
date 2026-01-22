

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './app/pages/Home';
import { Novidades } from './app/pages/Novidades';
import { Jogos } from './app/pages/Jogos';
import { Sobre } from './app/pages/Sobre';
import { TrabalheConosco } from './app/pages/TrabalheConosco';
import { Termos } from './app/pages/Termos';
import { Login } from './app/pages/login';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novidades" element={<Novidades />} />
            <Route path="/jogos" element={<Jogos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}