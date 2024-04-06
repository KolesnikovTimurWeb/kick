"use client"
import React, { useEffect, useState } from 'react'
import style from '@/styles/Cart.module.scss'
import bin from '@/assets/icons/Bin.svg'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { minusItem, plusItem, removeFromBasket } from '@/redux/slices/cartSlice'
import { delay, easeIn, easeInOut, motion } from "framer-motion"

const Item = ({ item, index }) => {
   const dispatch = useDispatch()
   return (
      <div className={style.cart_item}>
         <Image alt='KICK' width={1000} height={1000} src={item.mainImg} />

         <div className={style.cart_text}>
            <div className={style.cart_text_div}>
               <h3>{item.title}</h3>
               <span style={{ backgroundColor: item.ChoosedColor }}> </span>
               <h4>size: {item.ChoosedSize}</h4>
               <div className={style.cart_size_button}>
                  <button onClick={() => item.quantity !== 1 && dispatch(minusItem(index))}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => dispatch(plusItem(index))}>+</button>
               </div>
            </div>
            <div className={style.cart_price}>
               <h5>${item.price}</h5>
            </div>

            <div onClick={() => dispatch(removeFromBasket(item))} className={style.cart_close}>
               <Image src={bin} alt='Bin' width={32} height={32} />

            </div>
         </div>

      </div >
   )
}

const Cart = () => {
   const data = useSelector((state) => state.cart.items)
   const [total, setTotal] = useState(0)
   useEffect(() => {
      let summary = 0
      data.map(item => {
         summary += item.price * item.quantity
      })
      setTotal(summary)
   }, [data])

   return (
      <div className={style.cart}>
         <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
               delay: 0.15,
               ease: "easeInOut",
               duration: 0.3,
            }}
            className={style.cart_items}>
            <h2>Your Bag</h2>
            <h3>Items in your bag not reserved- check out now to make them yours.</h3>
            {data.map((item, index) =>
               <Item key={index} item={item} index={index} />
            )}
         </motion.div>
         <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
               delay: 0.25,
               ease: "easeInOut",
               duration: 0.3,
            }}
            className={style.cart_summary}>
            <h2>Order Summary</h2>
            {data.map((item, index) =>
               <div key={index} className={style.cart_summary_column}>
                  <div className={style.cart_summary_item}>
                     <h3>{item.title}</h3>
                     <h4>{item.ChoosedColor} | size:{item.ChoosedSize}</h4>
                  </div>
                  <p>${item.price}.00</p>
               </div>
            )}

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
               <p>${total + 6}</p>
            </div>
            <button>Checkout</button>
         </motion.div>
      </div>
   )
}

export default Cart
