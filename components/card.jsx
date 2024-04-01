import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '@/styles/Card.module.scss'
import CardSkeleton from './cardSkeleton'
const Card = ({ item, loading }) => {
   return (
      <div>
         {loading ? (
            <CardSkeleton key={'Kick'} />
         ) : (
            <div className={style.card}>
               <Image width={300} height={300} src='https://i.ibb.co/XYdS4ZJ/Rectangle-5.jpg' loading='lazy' />

               <h3>ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
               <Link href={'/product'}>View Product</Link>
            </div>
         )
         }

      </div >

   )
}

export default Card
