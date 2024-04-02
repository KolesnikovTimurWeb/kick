import React from 'react'
import style from '@/styles/Cart.module.scss'
import Image from 'next/image'
const Cart = () => {
   return (
      <div className={style.cart}>
         <div className={style.cart_items}>
            <h2>Your Bag</h2>
            <h3>Items in your bag not reserved- check out now to make them yours.</h3>
            <div className={style.cart_item}>
               <Image alt='KICK' width={1000} height={1000} src={'https://i.ibb.co/XYdS4ZJ/Rectangle-5.jpg'} />

               <div className={style.cart_text}>
                  <div>
                     <h4>DROPSET TRAINER SHOES</h4>
                     <p>Men’s Road Running Shoes
                        Enamel Blue/ University White</p>
                  </div>
                  <h5>$130.00</h5>
               </div>
            </div>
         </div>
         <div className={style.cart_summary}>
            <h2>Order Summary</h2>
            <div className={style.cart_summary_column}>
               <h3>1 ITEM</h3>
               <p>$130.00</p>
            </div>
            <div className={style.cart_summary_column}>
               <h3>Delivery </h3>
               <p>$6.00</p>
            </div>
            <div className={style.cart_summary_column}>
               <h3>Tax</h3>
               <p>$0.00</p>
            </div>
            <div className={style.cart_summary_total}>
               <h3>Total</h3>
               <p>$136.99</p>
            </div>
            <button>Checkout</button>
         </div>
      </div>
   )
}

export default Cart
