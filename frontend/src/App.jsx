import Navbar from "./components/navbar/navbar"
import { Route, Routes, useLocation } from "react-router-dom"
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from "./components/Footer/Footer"
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'

function App() {

  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login"

  return (
    <div>
      {!hideHeaderFooter && <Navbar/>}        
        <Routes>
          <Route path="/" element= {<Shop/>}/>
          <Route path="/Mens" element= {<ShopCategory banner={men_banner} category = "men"/>}/>
          <Route path="/Womens" element= {<ShopCategory banner={women_banner} category = "women"/>}/>
          <Route path="/Kids" element= {<ShopCategory banner={kid_banner} category = "kid"/>}/>
          <Route path="product" element= {<Product/>}> 
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
        {!hideHeaderFooter && <Footer/>}      
    </div>
  )
}

export default App
