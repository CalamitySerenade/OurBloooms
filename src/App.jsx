import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Gallery from './pages/Gallery.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
