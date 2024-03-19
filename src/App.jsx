import { useState, useEffect, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import HomePage from './Page/Homepage';
import StorePage from './Page/Storepage';
import Cartpage from './Page/Cartpage';


export const CartContext = createContext(null)

function App() {
  const [products, setProducts] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const [cartItems, setCartItems] = useState([])

  const [quantities, setQuantities] = useState({});

  const [darkMode, setDarkMode] = useState(false);


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

  const addToCart = (item) => {
    const checkInclude = cartItems.find(cartItem => cartItem.id == item.id)
    if (checkInclude) return
    setCartItems([...cartItems, item])
  }

  const removeItemCart = (item) => {
    const TempCart = cartItems.filter(cartItem => cartItem.id !== item.id)
    setCartItems(TempCart)
  }

  const updateQuantity = (itemId, quantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    console.log('working')
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <CartContext.Provider value={{ cartItems, addToCart, removeItemCart, setCartItems, updateQuantity, quantities }}>
        <Router >
          <Header toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/store' element={<StorePage products={products} error={error} loading={loading} />} />
            <Route path='/cart' element={<Cartpage />} />
          </Routes>
          <Footer />
        </Router>
      </CartContext.Provider>
    </div>
  )
}

export default App
