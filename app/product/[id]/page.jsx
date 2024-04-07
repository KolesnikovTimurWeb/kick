"use client"
import React, { useEffect, useState } from 'react'
import style from '@/styles/Product.module.scss'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, selectItems } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import axios from 'axios'
import { useParams } from 'next/navigation'
import clsx from 'clsx'
import { delay, easeIn, easeInOut, motion } from "framer-motion"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
const Product = () => {
   const route = useParams()
   const [active, setActive] = useState(null)
   const [data, setData] = useState([])
   const [colors, setColors] = useState([])
   const [color, setColor] = useState(null)
   const [colorIndex, setColorIndex] = useState(0)
   const check = useSelector((state) => state.cart.items)
   const dispatch = useDispatch()
   const [loading, setLoading] = useState(true)
   const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   }
   useEffect(() => {
      axios.get(`https://kick-backend.onrender.com/shoes/${route.id}`)
         .then((response) => {
            setData(...response.data)
            setTimeout(() => setLoading(false), 1000)

         })
         .catch((error) => {
            console.log(error);
         })
   }, [])

   return (
      <div className={style.card}>
         {loading === true && (
            <div className={style.card_skeleton_img}>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         )}
         {loading === false &&
            <motion.div
               variants={variants}
               initial='hidden'
               animate='visible'
               transition={{
                  delay: 0.1,
                  ease: "easeInOut",
                  duration: 0.5,
               }}
               className={style.card_images}>
               {
                  data.images[colorIndex].map((item, index) => (
                     <LazyLoadImage effect="blur" key={index} src={item} alt='Kick' loading='lazy' />
                  ))
               }
            </motion.div>
         }
         <div className={style.card_text}>
            <h2>{loading === true && (
               <div className={style.card_text_skeleton}>
               </div>
            )}{loading === false && data.title}</h2>
            <h3>{loading === true && (
               <div className={style.card_text_skeleton}>
               </div>
            )}{loading === false && `$${data.price}`}</h3>
            <div className={style.card_title}>
               <h4>Size</h4>
               <h5>Size chart</h5>
            </div>

            {loading === true &&
               <div className={style.card_size_skeleton}>
               </div>
            }
            {loading === false &&
               <motion.div
                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  transition={{
                     delay: 0.1,
                     ease: "easeInOut",
                     duration: 0.5,
                  }} className={style.card_size}>
                  {data.size.map((item, index) => (
                     <button key={index} onClick={() => setActive(item)}
                        className={`list-group-item ${active == item && style.card_size_active}`}>
                        {item}
                     </button>
                  ))}

               </motion.div>
            }
            <div className={style.card_title}>
               <h4>Colors</h4>
            </div>
            {colors}
            {loading === true && (
               <div className={style.card_color_skeleton}>
                  <button></button>
                  <button></button>
                  <button></button>
                  <button></button>
               </div>
            )}
            {loading === false &&
               <motion.div
                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  transition={{
                     delay: 0.2,
                     ease: "easeInOut",
                     duration: 0.5,
                  }} className={style.card_color}>

                  {data.colors.map((item, index) => (
                     <button key={index} onClick={() => {
                        setColor(item),
                           setColorIndex(index)
                     }}
                        style={{ backgroundColor: item, transform: color === item ? "scale(1.25)" : '' }}>
                     </button>
                  ))}
               </motion.div>
            }
            <button onClick={() => {

               dispatch(addToBasket({ ...data, ChoosedColor: color, ChoosedSize: active }))
            }} className={active && color ? style.card_button : style.card_button_disable}>Add to cart</button>

            <div className={style.card_about}>
               <div className={style.card_title}>
                  <h4>About the product</h4>
               </div>
               <p>{data.desc}
               </p>

            </div>
         </div>
      </div >
   )
}

export default Product
