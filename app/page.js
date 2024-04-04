"use client"
import MainSlider from "@/components/mainsider";
import Link from "next/link";
import style from '@/styles/Home.module.scss'
import Card from "@/components/card";
import CardSkeleton from "@/components/cardSkeleton";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/shoes')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error);
      })

    setTimeout(() => setLoading(false), 1000)

  }, [])
  data.map(item => {
    console.log(Object.keys(...item.images))
    let keys = Object.keys(...item.images)
  })
  return (
    <div>
      <MainSlider />
      <div className={style.div}>
        <div className={style.div_title}>
          <h2>
            Don’t miss out new drops
          </h2>
          <Link href={'/'}>Shop New Drops</Link>
        </div>
        <div >
          {loading === true &&
            (
              <div className={style.div_cards}>
                <CardSkeleton />
                <CardSkeleton />
              </div>
            )
          }
          <div className={style.div_cards}>
            {loading === false && data.map(item => (
              <Card item={item} />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
