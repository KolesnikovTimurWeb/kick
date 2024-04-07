"use client"
import React, { useEffect, useState } from 'react'
import style from '@/styles/Search.module.scss'
import axios from 'axios'
import Card from '@/components/card'
import search from '@/assets/icons/search.svg'
import Image from 'next/image'
import CardSkeleton from '@/components/cardSkeleton'
const Search = () => {
   const [loading, setLoading] = useState(true)
   const [newData, setNewData] = useState([])
   const [newDataDiv, setNewDataDiv] = useState(true)
   const [data, setData] = useState([])
   const [value, setValue] = useState(null)
   useEffect(() => {
      axios.get('https://kick-backend.onrender.com/shoesall')
         .then((response) => {
            setData(response.data)
         })
         .catch((error) => {
            console.log(error);
         })

      setTimeout(() => setLoading(false), 1000)

   }, [])

   function searchData(value) {
      let dataResult = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
      setNewDataDiv(false)
      setNewData(dataResult)
   }
   return (
      <div className={style.search}>
         <h2>Search Shoes</h2>
         <h3>You can find your pair of shoes</h3>
         <div className={style.search_input}>
            <input onChange={(e) => setValue(e.target.value)} type="text" placeholder='Search your shoe ....' />
            <button onClick={() => searchData(value)}>
               <Image width={24} height={24} alt='Kick' src={search} />
            </button>
         </div>
         {loading === true && (
            <div className={style.search_items}>
               {
                  data.map((item, index) => (
                     <CardSkeleton key={index} />
                  ))
               }
            </div>
         )}
         {loading === false && (
            <div className={style.search_items}>

               {newDataDiv === true && data.map((item, index) => (
                  <Card key={index} index={index} item={item} loading={loading} />
               ))}
               {newDataDiv === false && newData.map((item, index) => (
                  <Card key={index} index={index} item={item} loading={loading} />
               ))}
            </div>
         )}

      </div>
   )
}

export default Search
