import React, {useContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import MyContext from "../context/MyContext"
import { BiTrashAlt } from 'react-icons/bi';


const Cart = () => {
    const context = useContext(MyContext)
    const {cartItems, addToCart, removePasta, totalPerProduct, grandTotal, reduceQuantity} = context;
    const navigate = useNavigate()

    const perProduct = totalPerProduct(cartItems)
    const [quantity, setQuantity] = useState("")
    // const[itemQuantity, setItemQuantity] = useState(0)
  
    // useEffect(() => {
    //   if (itemQuantity === 1) {
    //     setQuantity(< BiTrashAlt />)
    //   } else {setQuantity("-")}
    // }, [quantity] )

    if (cartItems.length === 0)
    return(
        <main>
            
            <section>
                <p>There are no items in your cart</p>
                <button onClick={() => navigate(-1)}>Return</button>
            </section>
        </main>
    )
  
    const pastaList = cartItems.map((pastaData, index) => {
      // setItemQuantity(pastaData.quantity) 
        return (
          <aside key={pastaData.id} >
            <img className="product-image" src={pastaData.image} alt={pastaData.name} />
            <aside className='cart-text'>
              <h5>{pastaData.name}</h5>
              <p>
                Quantity <span>{pastaData.quantity}</span>
              </p>
              <p>€{pastaData.price.toFixed(2)}</p>
              <h4>Line Total {perProduct[index].toFixed(2)}</h4>
            </aside>
            <button onClick={() => addToCart(pastaData)}>
              +
            </button>

            <button
              onClick={() => reduceQuantity(pastaData)}>
              -
            </button>
            <button
              className='remove-button'
              onClick={() => removePasta(pastaData)}>
              Remove pasta
            </button>
            <div>
            {/* <button onClick={() => reduceQuantity(pastaData)}> {quantity} </button> */}
             
              {/* <p>{pastaData.quantity}</p> */}
              {/* <button>+</button> */}
            </div>
          </aside>
        );
      });
    
      return (
        <main>
          
          <section className='cart-page background-image'>{pastaList}
          <h5 className="grand-total">Total price = {grandTotal(cartItems).toFixed(2)}</h5>
          </section>
        
        </main>
      );
}

export default Cart

