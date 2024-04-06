"use client"
import React from 'react'
import style from "@/styles/Header.module.scss"
import Image from 'next/image'

import logo from '@/assets/icons/Logo.svg'
import heart from '@/assets/icons/heart.svg'
import cart from '@/assets/icons/cart.svg'
import search from '@/assets/icons/search.svg'
import Link from 'next/link'

const Header = () => {

   return (
      <div className={style.header}>
         <div className={style.logo}>
            <Link href='/'>
               <Image src={logo} alt='KICKS' />

            </Link>
         </div>
         <div className={style.icons}>
            <Link href='/favorite'>
               <Image src={heart} alt='KICKS' />
            </Link>
            <Link href='/cart'>
               <Image src={cart} alt='KICKS' />
            </Link>
            <Link href="/search">
               <Image src={search} alt='KICKS' />
            </Link>
         </div>
      </div>
   )
}

export default Header
