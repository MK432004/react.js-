import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Section1 from './components/section1/Section1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Section1/>
    <h1 className="bg-yellow-800 border-xl">may name is manish kumar </h1>
    </>
  )
}

export default App
