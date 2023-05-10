import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink,Link } from 'react-router-dom'

const Host = () => {
  return (
   <section className='bgprimary px-7'>
        <div className='flex gap-5'>
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
