import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink} from 'react-router-dom'

const Host = () => {
  return (
   <section className='px-7 pb-16 lg:px-[20%]'>
        <div className='flex gap-5 lg:text-3xl lg:font-regular'>
            <NavLink 
              className={({isActive})=> isActive? 'active hover':'hover'}
              end
              to={'.'}>Dashboard</NavLink>
            <NavLink 
              className={({isActive})=> isActive? 'active hover':'hover'}
              to={'vans'}>Vans</NavLink>
            <NavLink 
              className={({isActive})=> isActive? 'active hover':'hover'}
              to={'income'}>Income</NavLink>
            <NavLink 
              className={({isActive})=> isActive? 'active hover':'hover'}
              to={'reviews'}>Reviews</NavLink>
        </div>
        <Outlet/>
   </section>
  )
}

export default Host
