import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '@/styles/Card.module.scss'
import CardSkeleton from './cardSkeleton'
const Card = ({ item }) => {
   console.log(item.colors.join('/'))
   return (
      <div className={style.card}>
         <Image key={'Kick'} width={300} height={300} src={item.mainImg} alt='Kick' loading='lazy' />

         <div className={style.card_text}>
            <div>
               <h3>{item.title}</h3>
               <h4>{item.colors.join('/')}</h4>
            </div>
            <h5>${item.price}</h5>

         </div>

         <Link href={`/product/${item.title.replace(/\s/g, '-')}`}>View Product</Link>
      </div>
   )
}

export default Card
