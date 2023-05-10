import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Details = () => {
  const {VanDetails}= useOutletContext()
  const {name,description,type,price,imageUrl} = VanDetails
 
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-bold text-sm'>Name: <span className='font-medium'>{name}</span></h4>
      <h4 className='font-bold text-sm'>Category: <span className='font-medium'>{type}</span></h4>
      <h4 className='font-bold text-sm'>Description: <span className='font-medium'>{description}</span></h4>
      <h4 className='font-bold text-sm'>Visibility: <span className='font-medium'>Public</span></h4>

    </div>
  )
}

export default Details
