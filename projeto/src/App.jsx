import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/header.jsx'
import Footer from './components/Foote/footer.jsx'
import Home from './pages/Home.jsx'
import SobreNos from './pages/SobreNos.jsx'
import FaleConosco from './pages/FaleConosco.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App