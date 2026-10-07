import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Section1/>
    <Section2/>
    
    </>
  )
}

export default App
