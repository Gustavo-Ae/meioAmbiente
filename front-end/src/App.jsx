import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/Login/Login'
import TelaProjeto from './pages/Projeto/TelaProjeto'
import Certificados from './pages/Certificados/Certificados'

function App() {

  return (
    <>
     <Router>
        <Header />
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path='/projeto/:id' element={ <TelaProjeto />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Certificados' element={<Certificados/>} />
          </Routes>
     </Router>
    </>
  )
}

export default App
