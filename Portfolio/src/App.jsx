import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Skills from './pages/Skills';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App