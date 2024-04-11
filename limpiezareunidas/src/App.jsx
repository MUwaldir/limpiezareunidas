import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import QuienesSomos from './components/QuienesSomos'
import Servicios from './components/Servicios'
import Clientes from './components/Clientes'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Navbar/>
    <Banner/>
    <QuienesSomos/>
    <Servicios/>
    <Clientes/>
    <Contacto/>
    <Footer/>
    </>
  )
}

export default App
