import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='relative min-h-[100vh] bgprimary w-[100vw] box-border overflow-x-hidden'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
