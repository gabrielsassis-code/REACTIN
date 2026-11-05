import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/header.jsx'
import Footer from './components/Foote/footer.jsx'
import Home from './pages/Home.jsx'
import SobreNos from './pages/SobreNos.jsx'
import FaleConosco from './pages/FaleConosco.jsx'
import Servicos from './pages/Servicos.jsx'
import TrabalheConosco from './pages/TrabalheConosco.jsx'
import Cultura from './pages/carreiras/Cultura.jsx'
import Vagas from './pages/carreiras/Vagas.jsx'
import Beneficios from './pages/carreiras/Beneficios.jsx'
import Candidatar from './pages/carreiras/Candidatar.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />}>
          <Route index element={<Cultura />} />
          <Route path="vagas" element={<Vagas />} />
          <Route path="beneficios" element={<Beneficios />} />
          <Route path="candidatar" element={<Candidatar />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App