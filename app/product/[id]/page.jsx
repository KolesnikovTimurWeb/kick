"use client"
import React, { useEffect, useState } from 'react'
import style from '@/styles/Product.module.scss'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, selectItems } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import axios from 'axios'
const Product = () => {
   const [active, setActive] = useState(null)
   const [data, setData] = useState([])
   const [colors, setColors] = useState([])
   const [color, setColor] = useState('green')
   const check = useSelector((state) => state.cart.value)
   const dispatch = useDispatch()
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      axios.get('http://localhost:8000/shoes')
         .then((response) => {
            setData(response.data)
            console.log(response.data)

            setTimeout(() => setLoading(false), 1000)

         })
         .catch((error) => {
            console.log(error);
         })


   }, [])


   let buttons = [32, 33, 34]
   return (
      <div className={style.card}>
         <div className={style.card_images}>
            <Image key='Kick1' width={1000} height={1000} src='https://i.ibb.co/XYdS4ZJ/Rectangle-5.jpg' alt='Kick' loading='lazy' />
            <Image key='Kick2' width={1000} height={1000} src='https://i.ibb.co/XYdS4ZJ/Rectangle-5.jpg' alt='Kick' loading='lazy' />
            <Image key='Kick3' width={1000} height={1000} src='https://i.ibb.co/XYdS4ZJ/Rectangle-5.jpg' alt='Kick' loading='lazy' />
            <Image key='Kick4' width={1000} height={1000} src='https://i.ibb.co/XYdS4ZJ/Rectangle-5.jpg' alt='Kick' loading='lazy' />

            {loading === false && data[0].images.map(item => (
               console.log(item)
            ))}
         </div>
         <div className={style.card_text}>
            <h2 onClick={() => console.log(data[1].images)
            }>ADIDAS 4DFWD X PARLEY RUNNING SHOES</h2>
            <h3>$125.00</h3>
            <div className={style.card_title}>
               <h4>Size</h4>
               <h5>Size chart</h5>
            </div>
            {colors}
            <div className={style.card_size}>
               {buttons.map((item, index) => (
                  <button key={index} onClick={() => setActive(item)}
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
