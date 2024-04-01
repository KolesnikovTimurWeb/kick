"use client"
import MainSlider from "@/components/mainsider";
import Link from "next/link";
import style from '@/styles/Home.module.scss'
import Card from "@/components/card";
import CardSkeleton from "@/components/cardSkeleton";
import { useEffect, useState } from "react";
export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
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
        <div className={style.div_cards}>
          <Card loading={loading} />
        </div>

      </div>
    </div>
  );
}
