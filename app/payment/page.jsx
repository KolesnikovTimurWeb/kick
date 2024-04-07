"use client"
import React, { useEffect, useState } from 'react'
import style from '@/styles/Payment.module.scss'
import { useSelector } from 'react-redux'
import { delay, easeIn, easeInOut, motion } from "framer-motion"

const Payment = () => {
   const data = useSelector((state) => state.cart.items)
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
   });
   const [errors, setErrors] = useState({});


   const handleInputChange = (e) => {
      const { name, value } = e.target;

      setFormData({
         ...formData,
         [name]: value
      });

   };
   const [total, setTotal] = useState(0)
   useEffect(() => {
      let summary = 0
      data.map(item => {
         summary += item.price * item.quantity
      })
      setTotal(summary)
   }, [data])
   const validateForm = () => {
      let isValid = true;
      const newErrors = {};

      // Validate email
      if (!formData.firstName) {
         newErrors.firstName = "First Name is required";
         isValid = false;
      }
      if (!formData.lastName) {
         newErrors.lastName = "Last Name is required";
         isValid = false;
      }
      // Validate password
      if (!formData.address) {
         newErrors.address = "Address is required";
         isValid = false;
      }
      if (!formData.email) {
         newErrors.email = "Email is required";
         isValid = false;
      }
      setErrors(newErrors);
      return isValid;
   };
   const handleSubmit = (e) => {
      e.preventDefault();

      if (validateForm()) {
         // Form is valid, you can submit or process the data here
      } else {
         // Form is not valid, display error messages
      }
   };
   return (
      <div className={style.payment}>
         <form onSubmit={handleSubmit} className={style.payment_form}>
            <h2>Contact Details</h2>
            <h3>We will use these details to keep you inform about your delivery.</h3>
            {errors.email && <div className={style.err}>{errors.email}</div>}
            <input type="email" onChange={handleInputChange} value={formData.email} name='email' placeholder='Email' />
            <h2>Shipping Address</h2>
            <div className={style.payment_input}>
               <div>
                  {errors.firstName && <div className={style.err}>{errors.firstName}</div>}
                  <input type="text" onChange={handleInputChange} value={formData.firstName} name='firstName' placeholder='First Name*' />
               </div>
               <div>
                  {errors.lastName && <div className={style.err}>{errors.lastName}</div>}
                  <input type="text" onChange={handleInputChange} value={formData.lastName} name='lastName' placeholder='Last Name*' />
               </div>

            </div>
            {errors.address && <div className={style.err}>{errors.address}</div>}

            <input onChange={handleInputChange} value={formData.address} name='address' placeholder='Delivery Address*' />


            <div className={style.payment_form_ckeckbox_input}>
               <input required id='terms' name='terms' type="checkbox" />
               <label htmlFor="terms">I agree with our terms and conditions and privacy policy.</label>
            </div>

            <button type='submit'>
               Review AND PAY
            </button>

         </form>
         <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
               delay: 0.25,
               ease: "easeInOut",
               duration: 0.3,
            }}
            className={style.cart_summary}>
            <h2>Order Summary</h2>
            {data.map((item, index) =>
               <div key={index} className={style.cart_summary_column}>
                  <div className={style.cart_summary_item}>
                     <h3>{item.title}</h3>
                     <h4>{item.ChoosedColor} | size:{item.ChoosedSize}</h4>
                  </div>
                  <p>${item.price}.00</p>
               </div>
            )}

            <div className={style.cart_summary_column}>
               <h3>Delivery </h3>
               <p>$6.00</p>
            </div>
            <div className={style.cart_summary_column}>
               <h3>Tax</h3>
               <p>$0.00</p>
            </div>
            <div className={style.cart_summary_total}>
               <h3>Total</h3>
               <p>${data.length !== 0 ? total + 6 : 0}</p>
            </div>
         </motion.div>
      </div>
   )
}

export default Payment
