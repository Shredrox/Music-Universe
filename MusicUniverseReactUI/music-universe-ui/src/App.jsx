import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { LoginForm } from "./components/LoginForm"
import { Header } from './components/Header'
import { StartSection } from './components/StartSection'
import { ProductsShowcase } from './components/ProductsShowcase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <StartSection/>
      <ProductsShowcase/>
    </div>
  )
}

export default App
