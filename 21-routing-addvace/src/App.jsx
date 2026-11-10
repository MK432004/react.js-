import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Notefound from './Pages/Notfound'
import Product from './Pages/Product';
import Mens from './Pages/Mens';
import Women from './Pages/Women';
import Corsee from './Pages/Corsee';
import CorseeDetail from './Pages/CorseeDetail';
import Navbar2 from './Components/Navbar2';

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/corsee" element={<Corsee/>}/>
        <Route  path="/corsee/:id" element={<CorseeDetail/>}/>

        <Route path="/product" element={<Product/>}> 
        <Route path="mens" element={<Mens/>}/>
        <Route path="women" element={<Women/>}/>
        </Route>
        <Route path='*' element={<Notefound/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App

