import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import HomePage from './Page/Homepage';
import StorePage from './Page/Storepage';
import Cartpage from './Page/Cartpage';

function App() {
  const [products, setProducts] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Server error")
        } else {
          return response.json()
        }
      })
      .then(actualData => {
        console.log(actualData)
        setProducts(actualData)
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [])




  return (

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/store' element={<StorePage products={products} />} />
        <Route path='/cart' element={<Cartpage />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
