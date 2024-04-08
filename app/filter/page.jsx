"use client"
import React, { useEffect, useState } from 'react'
import style from '@/styles/Filter.module.scss'
import axios from 'axios'
import Card from '@/components/card'

const Filter = () => {

   const [data, setData] = useState([])
   const [color, setColor] = useState(null)
   const [size, setSize] = useState(null)
   const [loading, setLoading] = useState(true)

   const [price, setPrice] = useState(0)

   let sizeButtons = [38, 39, 40, 41, 42, 43, 44, 45, 46]
   let colorButtons = ["darkblue", "black", "green", "yellow", "purple", "grey", 'lightblue', "peru", "pink", "orange"]

   useEffect(() => {
      getItemsUrl()
   }, [])

   function getItemsUrl() {
      axios.get(`https://kick-backend.onrender.com/shoes?color=${color}&price=${price}&size=${size}`)
         .then((response) => {
            setData(response.data)
         })
         .catch((error) => {
            console.log(error);
         })

      setTimeout(() => setLoading(false), 1000)

   }
   return (
      <div className={style.filter}>
         <div className={style.filter_inputs}>
            <h2>Filters</h2>
            <h3>Fize</h3>
            <div className={style.filter_sizes}>
               {sizeButtons.map((item, index) => (
                  <button key={index} className={item === size ? style.filter_size_active : ''} onClick={() => {
                     if (item !== size) {
                        setSize(item)
                     } else {
                        setSize(null)
                     }
                  }} >{item}</button>
               ))}
            </div>
            <h3>Color</h3>
            <div className={style.filter_colors}>
               {colorButtons.map((item, index) => (
                  <button key={index} className={item === color ? style.filter_color_active : ''} onClick={() => {
                     if (item !== color) {
                        setColor(item)
                     } else {
                        setColor(null)
                     }
                  }} style={{ backgroundColor: item }}></button>
               ))}
            </div>
            <h3>Price</h3>
            <div className={style.filter_range}>
               <p>max: {price}$</p>
               <input onChange={e => setPrice(e.target.value)} type="range" min="0" max="200" defaultValue={0} step="10" />
            </div>
            <button className={style.filter_button} onClick={() => getItemsUrl()}>Apply Filter</button>
         </div>
         <div className={style.filter_items}>
            {data.map((item, index) => (
               <Card item={item} loading={loading} key={index} />
            ))}
         </div>
      </div >
   )
}

export default Filter
