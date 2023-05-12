import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='flex flex-col justify-center align-center h-[75vh] px-[28px]'>
        <h1 className='text-2xl font-bold mb-5'>Sorry, the page you are looking for is Unavailable at the moment!</h1>
        <Link 
            className='btn bg-black text-white'
            to={'/'}>Return to Home</Link>
    </section>
  )
}

export default Error
