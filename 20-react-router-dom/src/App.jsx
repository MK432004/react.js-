
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'
import Navbar from './components/Navbar'
import Product from './pages/Product'



const App = () => {
  return (
    
    <div className=" ">
      <div>
      <Navbar/>
      </div>
    
     <div className="h-88 p-50 bg-amber-400 ">
     <Routes>
        <Route   path='/' element={<Home/>} />
       
        <Route  path='/about' element={<About/>}/>
        <Route   path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>}/> 
      </Routes>
     </div>
     
     <div className="bg-amber-950 items-center justify-center  gap-4 flex ">
      <h1>6205745488</h1>
      <h1>manish08980@gmail.com</h1>
     </div>
     

    </div>
  )
}

export default App
