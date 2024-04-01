"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from '../styles/MainSlider.module.scss'

const MainSlider = () => {
   return (
      <div>
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
               <img loading='lazy' src={'https://i.ibb.co/V2Z90f9/image-14.jpg'} alt='Kicks' />
               <div className={style.slide_text}>
                  <h2>NIKE AIR MAX</h2>
                  <h3>Nike introducing the new air max for everyone's comfort</h3>
                  <Link href={'/'}>Shop now</Link>
               </div>
            </div>
            <div className={style.slide}>
               <img loading='lazy' src={'https://i.ibb.co/V2Z90f9/image-14.jpg'} alt='Kicks' />
               <div className={style.slide_text}>
                  <h2>NIKE AIR MAX</h2>
                  <h3>Nike introducing the new air max for everyone's comfort</h3>
                  <Link href={'/'}>Shop now</Link>
               </div>
            </div>
         </Carousel>

      </div>
   )
}

export default MainSlider
