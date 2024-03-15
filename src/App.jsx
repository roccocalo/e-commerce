import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import HomePage from './Page/Homepage';
import StorePage from './Page/Storepage';
import Cartpage from './Page/Cartpage';

function App() {
  

  return (
    
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/store' element={<StorePage />} />
      <Route path='/cart' element={<Cartpage />} />
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
