import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {ShopContext} from '../../Context/ShopContext'
import nav_dropdown from '../assets/nav_dropdown.png'

const Navbar = () => {

  const menuItems = ["Shop", "Mens", "Womens", "Kids"]
  const [menu, setMenu] = useState("Shop")

  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef()

  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="navDropdown" />
      <ul ref={menuRef} className="nav-menu">
        {menuItems.map((item)=>(
          <li key={item} onClick={()=>setMenu(item)}>
            <Link to= {item === "Shop" ? "/" : item}
              style={{textDecoration: 'none', color: 'black'}}
            >
              {item}
            </Link>
            {menu === item ? <hr/> : null}
          </li>
        ))}       
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
          <button>Login</button>
        </Link>        
        <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
