import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Vans = () => {

  const [vandata,setVandata] = useState([])
  
  React.useEffect(()=>{
    fetch('/api/vans')
    .then(response=> response.json())
    .then(data => setVandata(data.vans))
    
  },[])


  return (
   

    <section className='px-[26px] pb-14 bgprimary'>
      <h2 className='text-[#161616] text-[32px] py-[22px] leading-[34px] font-[700]'>Explore our van options</h2>
      <div className='flex gap-3 pb-10 justify-between'>
        <button className='category-btn'>simple</button>
        <button className='bg-[#FFEAD0] category-btn'>luxury</button>
        <button className='bg-[#FFEAD0] category-btn'>rugged</button>
        <button className='border-b border-black text-[12px] leading-[18px]'>clear filters</button>
      </div>
      <div className='grid grid-cols-2 gap-[34px]'>
        {
          vandata.map((item)=>{
            const {id,name,price,description,imageUrl,type} = item

            return(
              <div key={id}>
                  <Link to={`${id}`}>
                    <img className='object-cover rounded-md my-4' src={imageUrl} alt="" />
                    <div className='flex justify-between'>
                      <h4 className='text-[#161616] text-[20px] leading-[32px] font-[600]'>{name}</h4>
                        <div>
                          <h4 className='text-[#161616] text-[20px] leading-[32px] font-[600]'>${price}</h4>
                          <p className='text-sm mt-[-6px]'>/day</p>
                        </div>
                    </div>
                    <button className={`${type==='simple' && 'bg-[#E17654]'} ${type==='luxury' && 'bg-[#161616]'} ${type==='rugged' && 'bg-[#115E59]'} btn text-[#FFFFFF]`}>{type}</button>
                </Link> 
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Vans
