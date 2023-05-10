import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Yourvans = () => {
  const [vandata, setVandata] = useState([])

  useEffect(() => {
      fetch('/api/host/vans')
          .then(res => res.json())
          .then(data => setVandata(data.vans))
  },[])
  console.log(vandata)
  return (
      <section className='my-14 bgprimary flex-1 h-[100%]'>
        <h2 className='text-2xl leading-8 font-bold'>Your listed vans</h2>
          {
              vandata.map(item => {
                  const {id,name,price,imageUrl} = item
                  return (
                      <div key={id} className='my-5 bg-white  rounded-md flex items-center p-4'>
                              <Link 
                                to={`${id}`}
                                className='flex gap-5 items-center h-18'>
                                  <img className='object-cover rounded-sm h-16' src={imageUrl} alt="Vans" />
                                  <div>
                                      <h4 className='text-sm font-semibold'>{name}</h4>
                                      <p className='text-sm'>${price}/day</p>
                                  </div>
                              </Link>
                      </div>
                  )
              })
          }
      </section>
  )
}

export default Yourvans

