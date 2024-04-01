import React from 'react'
import style from '@/styles/Footer.module.scss'
import Link from 'next/link'
import facebook from '@/assets/icons/facebook.svg'
import twitter from '@/assets/icons/twitter.svg'
import tiktok from '@/assets/icons/tiktok.svg'
import instagram from '@/assets/icons/instagram.svg'
import logoBig from '@/assets/icons/Logo.webp'
import Image from 'next/image'

const Footer = () => {
   return (
      <div className={style.footer}>
         <div className={style.footer_upper}>
            <div className={style.footer_about}>
               <h2>About us</h2>
               <h3>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</h3>
            </div>
            <div className={style.footer_column}>
               <h2>Categories</h2>
               <Link href={'/'}>Runners</Link>
               <Link href={'/'}>Sneakers</Link>
               <Link href={'/'}>Basketball</Link>
               <Link href={'/'}>Outdoor</Link>
            </div>
            <div className={style.footer_column}>
               <h2>Company</h2>
               <Link href={'/'}>About</Link>
               <Link href={'/'}>Contact</Link>
               <Link href={'/'}>Blogs</Link>
               <Link href={'/'}>Outdoor</Link>
            </div>
            <div className={style.footer_social}>
               <h2>Follow us </h2>
               <div>
                  <Link href={'/'}><Image alt='Kicks' width={30} height={30} src={facebook} /></Link>
                  <Link href={'/'}><Image alt='Kicks' width={30} height={30} src={instagram} /></Link>
                  <Link href={'/'}><Image alt='Kicks' width={30} height={30} src={twitter} /></Link>
                  <Link href={'/'}><Image alt='Kicks' width={30} height={30} src={tiktok} /></Link>
               </div>

            </div>
         </div>
         <div className={style.footer_down}>
            <Image alt='Kicks' src={logoBig} />
         </div>
      </div>
   )
}

export default Footer
