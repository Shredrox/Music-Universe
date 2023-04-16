import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { LoginForm } from "./components/LoginForm"
import { LoginRegister } from './pages/LoginRegister'
import { Header } from './components/Header'
import { StartSection } from './components/StartSection'
import { ProductsShowcase } from './components/ProductsShowcase'
import { Home } from './pages/Home'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginRegister/>} />
      </Routes>
    </>
  )
}

export default App
