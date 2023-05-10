import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Pricing = () => {
  const {VanDetails}= useOutletContext()
  const {name,description,type,price,imageUrl} = VanDetails
 
  return (
      <h4 className='font-bold text-md py-6'>${price}<span className='text-sm font-normal'>/day</span></h4>
  )
}

export default Pricing
