"use client"
import Card from '@/components/card'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from '@/styles/Favorite.module.scss'
import heart from '@/assets/icons/heart.svg'
import { findItemWishList } from '@/redux/slices/wishListSlice'
import Image from 'next/image'
import { delay, easeIn, easeInOut, motion } from "framer-motion"

const Favorite = () => {
   const [data, setData] = useState([])
   const dispatch = useDispatch()
   let allLike = useSelector((state) => state.wishList.items.filter(item => item.liked === true))
   useEffect(() => {
      if (allLike === undefined) return
      setData(allLike)

   }, [])
   const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   }
   return (
      <div className={style.favorite}>
         <h2>Liked Shoes</h2>
         <h3>You can see shoes that you put in your wishlist</h3>
         {data.length === 0 && (
            <div className={style.favorite_none}>
               <Image src={heart} width={100} height={100} alt='KICK' />
               <h3>No Items in Wishlist</h3>
            </div>
         )}
         <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{
               delay: 0.15,
               ease: "easeInOut",
               duration: 0.5,
            }} className={style.favorite_items}>
            {data.map((item, index) => {
               return (
                  <Card item={item} key={index} index={index} />
               )
            })}
         </motion.div>


      </div>
   )
}

export default Favorite
