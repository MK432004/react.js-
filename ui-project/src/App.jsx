import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';

function App() {
  const users = 
   [
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMb26HBU9J3LOKzN8BywaTqJeRtaTVgKKOq4FaMaH8zw&s=10",
      introduction:"",
      tag:"diserv"
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAC1kBFD8UgsOayMBHWl9pktJkSO1BuY7ZpdVGmLUMg&s=10",
      introduction:"",
      tag:" stisfied"
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlh0xz2IFyqw2rS-vba9NyWd1sBovXfN-pwo7gmZtpQA&s=10",
     introduction:"",
     tga:" unerbag "
    }
  ]

  return (
    <>
    <Section1 users ={users}/>
    <Section2/>
    
    </>
  )
}

export default App
