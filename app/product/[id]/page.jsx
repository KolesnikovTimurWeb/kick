"use client"
import React, { useState } from 'react'
import style from '@/styles/Product.module.scss'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, selectItems } from '@/redux/slices/cartSlice'
import Image from 'next/image'
const Product = () => {
   const [active, setActive] = useState(null)
   const check = useSelector((state) => state.cart.value)
   const dispatch = useDispatch()
   console.log(check)
   let buttons = [32, 33, 34]
   return (
      <div className={style.card}>
         <div className={style.card_images}>
            <Image width={1000} height={1000} src='https://i.ibb.co/XYdS4ZJ/Rectangle-5.jpg' alt='Kick' loading='lazy' />
            <Image width={1000} height={1000} src='https://i.ibb.co/XYdS4ZJ/Rectangle-5.jpg' alt='Kick' loading='lazy' />
            <Image width={1000} height={1000} src='https://i.ibb.co/XYdS4ZJ/Rectangle-5.jpg' alt='Kick' loading='lazy' />
            <Image width={1000} height={1000} src='https://i.ibb.co/XYdS4ZJ/Rectangle-5.jpg' alt='Kick' loading='lazy' />
         </div>
         <div className={style.card_text}>
            <h2 onClick={() => console.log(check)}>ADIDAS 4DFWD X PARLEY RUNNING SHOES</h2>
            <h3>$125.00</h3>
            <div className={style.card_title}>
               <h4>Size</h4>
               <h5>Size chart</h5>
            </div>
            <div className={style.card_size}>
               {buttons.map((item) => (
                  <button onClick={() => setActive(item)}
                     className={`list-group-item ${active == item && style.card_size_active}`}>
                     {item}
                  </button>
               ))}

            </div>
            <button onClick={() => dispatch(addToBasket())} className={style.card_button}>Add to cart</button>

            <div className={style.card_about}>
               <div className={style.card_title}>
                  <h4>About the product</h4>
               </div>
               <p>Shadow Navy / Army Green
               </p>
               <p> This product is excluded from all promotional discounts and offers.</p>
               <p>  Pay over time in interest-free installments with Affirm, Klarna or Afterpay.
                  Join adiClub to get unlimited free standard shipping, returns, & exchanges.</p>
            </div>
         </div>
      </div>
   )
}

export default Product
