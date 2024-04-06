import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '@/styles/Card.module.scss'
import CardSkeleton from './cardSkeleton'
import heart from '@/assets/icons/heart.svg'
import heartLiked from '@/assets/icons/heart-liked.svg'
import { delay, easeIn, easeInOut, motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { addToWishList, findItemWishList } from '@/redux/slices/wishListSlice'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ item, index }) => {
   const dispatch = useDispatch()
   let like = useSelector((state) => state.wishList.items.find(state => item.title === state.title))
   const allLike = useSelector((state) => state.wishList.items)
   if (like === undefined) {
      like = false
   }
   const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   }
   return (
      <motion.div
         variants={variants}
         initial='hidden'
         animate='visible'
         transition={{
            delay: 0.15 * index,
            ease: "easeInOut",
            duration: 0.5,
         }} className={style.card}>
         <div className={style.card_img}>
            <LazyLoadImage effect='blur' key={'Kick'} width={300} height={380} src={item.mainImg} alt='Kick' loading='lazy' />
         </div>

         <div className={style.card_text}>
            <div>
               <h3>{item.title}</h3>
               <h4>{item.colors.join('/')}</h4>
            </div>
            <h5>${item.price}</h5>

         </div>
         <div onClick={() => dispatch(addToWishList(item))} className={style.card_heart}>
            <Image key={'Kick'} width={20} height={20} src={like.liked === true ? heartLiked : heart} alt='Kick' loading='lazy' />

         </div>
         <Link href={`/product/${item.title.replace(/\s/g, '-')}`}>View Product</Link>
      </motion.div >
   )
}

export default Card
