
import React from 'react'
import { Route, Contact ,Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Routes>
       <Route   path="/" element={<Home/>} />
       <Route path=" /contact" element={<Contact/>} />

      </Routes>
  
      
    </div>
  )
}

export default App
