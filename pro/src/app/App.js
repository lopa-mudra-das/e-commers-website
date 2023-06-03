import React from 'react'
import Navbar from '../components/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Shop } from '../pages/shop/Shop'
import{Cart} from '../pages/cart/Cart'
import { ShopContextProvider } from '../context/Shop-Context'

function App() {
    return (
    <>
    
     <ShopContextProvider>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </Router>
    </ShopContextProvider>
    </> 
  )
}

export default App
