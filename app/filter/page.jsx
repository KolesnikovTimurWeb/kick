import React from 'react'
import style from '@/styles/Filter.module.scss'

const Filter = () => {
   let sizeButtons = [38, 39, 40, 41, 42, 43, 44, 45, 46]
   let colorButtons = ["#4A69E2", "#FFA52F", "black", "green", "grey", "pink", 'lightblue', "lib"]
   return (
      <div className={style.filter}>
         <div className={style.filter_inputs}>
            <h2>Filters</h2>
            <h3>Fize</h3>
            <div className={style.filter_sizes}>
               {sizeButtons.map((item, index) => (
                  <button>{item}</button>
               ))}
            </div>
            <h3>Color</h3>
            <div className={style.filter_colors}>
               {colorButtons.map((item, index) => (
                  <button style={{ backgroundColor: item }}></button>
               ))}
            </div>
            <h3></h3>
         </div>
         <div className={style.filter_items}>

         </div>
      </div>
   )
}

export default Filter
