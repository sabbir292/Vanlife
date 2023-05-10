import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between bgprimary px-[26px] py-[36px] h-[14vh] list-none inter items-center mt-auto'>
        <Link to={'/'} className='uppercase font-[900] text-[26px] '>#Vanlife</Link>
        <li className='flex gap-4 font-[600] text-md'>
            <NavLink 
            className={({isActive})=> isActive? 'active hover': 'hover'} 
            to={'/'} >Home</NavLink>
            <NavLink 
            className={({isActive})=> isActive? 'active hover': 'hover'}
            to={'/host'} >Host</NavLink>
            <NavLink 
            className={({isActive})=> isActive? 'active hover': 'hover'}
            to={'/about'} >About</NavLink>
            <NavLink 
            className={({isActive})=> isActive? 'active hover': 'hover'}
            to={'/vans'} >Vans</NavLink>
        </li>
    </nav>
  )
}

export default Navbar
