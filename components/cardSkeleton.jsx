import React from 'react'
import style from '@/styles/CardSkeleton.module.scss'
const CardSkeleton = () => {
   return (
      <div className={style.skeleton}>
         <div className={style.skeleton_img}>
         </div>
         <div className={style.skeleton_text}>
         </div>
         <div className={style.skeleton_button}>
         </div>
      </div>
   )
}

export default CardSkeleton
