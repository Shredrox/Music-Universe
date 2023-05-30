import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { LoginForm } from "./components/LoginForm"
import { LoginRegister } from './pages/LoginRegister'
import { Header } from './components/Header'
import { StartSection } from './components/StartSection'
import { ProductsShowcase } from './components/ProductsShowcase'
import { Home } from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import { Catalog } from './pages/Catalog'

function App() {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginRegister/>} />
        <Route path="/catalog" element={<Catalog/>} />
      </Routes>
    </>
  )
}

export default App
