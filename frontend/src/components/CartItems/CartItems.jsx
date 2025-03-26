import { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = () =>{

  const {getTotalCartAmount,all_products, cartItems, removeFromCart}= useContext(ShopContext);

  return(
    <div className='cartItems'>
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>        
      </div>
      <hr />
      {all_products.map((e)=>{
        if(cartItems[e.id] > 0){
          return(
            <div>
              <div className="cartItems-format cartItems-format-main">
                <img src={e.image} alt="" className='cartIcon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartItems-qty'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='cartItems-remove-icon' src={remove_icon} alt="remove" onClick={()=>{removeFromCart(e.id)}} />
              </div>
              <hr />
            </div>
          )
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
           <div className='cartItems-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
           </div>
           <hr />
           <div className='cartItems-total-item'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
           </div>           
          </div>
          <button>Procced To Checkout</button>
        </div>
          <div className="cartItems-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="cartItems-promobox">
              <input type="text" placeholder='Promo Code'/>
              <button>Submit</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CartItems