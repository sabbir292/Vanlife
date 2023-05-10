import React from 'react'
import { useOutletContext } from 'react-router-dom'
const Photos = () => {
  const {VanDetails}= useOutletContext()
  const {imageUrl} = VanDetails
 
  return (
      <img className='h-16 w-16 object-cover rounded-sm' src={imageUrl} alt="" />
  )
}


export default Photos
