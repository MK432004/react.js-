

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Componentes/Card';

function App() {
 const[counter,setCounter] = useState(0)


 

  return (
    <>
    <h className='bg-green-400 rounded text-2xl text-black' >Tailwind test </h>
    <Card username=" Manish Kumar" btnText="clickme" /> <Card username="Manish Kumar" btnText="clickme"/>

    </>
  )

}
export default App
