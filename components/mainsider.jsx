"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from '../styles/MainSlider.module.scss'
import { delay, easeIn, easeInOut, motion } from "framer-motion"

const MainSlider = ({ loading }) => {
   const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   }
   return (
      <>
         {loading === true && (
            <div className={style.slide_skeleton}></div>
         )}
         {loading === false && (
            <motion.div
               variants={variants}
               initial='hidden'
               animate='visible'
               transition={{
                  delay: 0.1,
                  ease: "easeInOut",
                  duration: 0.5,
               }}>
               <Carousel

                  autoPlay
                  infiniteLoop
                  showStatus={false}
                  showArrows={false}
                  showThumbs={false}
                  transitionTime={500}
                  interval={3000}
                  stopOnHover={false}
                  swipeable={false}>

                  <div className={style.slide}>
                     <Image width={1000} height={1000} loading='lazy' src={'https://i.ibb.co/V2Z90f9/image-14.jpg'} alt='Kicks' />
                     <div className={style.slide_text}>
                        <h2>NIKE AIR MAX</h2>
                        <h3>Nike introducing the new air max for everyone's comfort</h3>
                        <Link href={'/'}>Shop now</Link>
                     </div>
                  </div>
                  <div className={style.slide}>
                     <Image width={1000} height={1000} loading='lazy' src={'https://i.ibb.co/L62YvS5/649977.jpg'} alt='Kicks' />
                     <div className={style.slide_text}>
                        <h2>AIR JORDAN</h2>
                        <h3>Nike introducing the new air for everyone's comfort</h3>
                        <Link href={'/'}>Shop now</Link>
                     </div>
                  </div>
                  <div className={style.slide}>
                     <Image width={1000} height={1000} loading='lazy' src={'https://i.ibb.co/vjjRQ5q/DIqJBN7.jpg'} alt='Kicks' />
                     <div className={style.slide_text}>
                        <h2>NIKE SALE</h2>
                        <h3>Brooks's Looks Gear-up for the Majors</h3>
                        <Link href={'/'}>Shop now</Link>
                     </div>
                  </div>
               </Carousel>

            </motion.div>
         )}

      </>

   )
}

export default MainSlider
