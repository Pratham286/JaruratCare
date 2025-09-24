import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Patient from './pages/Patient'
import About from './pages/About'

function App() {

  return (
    <div>
     <Header />
     {/* <BrowserRouter> */}
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/patient' element={<Patient />}/>
      <Route path='/about' element={<About />}/>
     </Routes>
     {/* </BrowserRouter> */}
     <Footer />
    </div>
  )
}

export default App
