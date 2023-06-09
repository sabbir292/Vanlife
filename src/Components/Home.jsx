import React from 'react'
import homebg from '../assets/home.png'

const Home = () => {
    const bghome = {
        backgroundImage: `url(${homebg})`
    }
  return (
    <section className='relative flex flex-col items-center justify-center inter text-[#FFFFFF] px-[26px] py-[65px] bg-cover bg-no-repeat bg-center min-h-[100vh] overflow-x-hidden mb-auto lg:px-[20%]' style={bghome}>
        <div className='bg-black absolute h-[100%] w-[100%] opacity-40 -z-40'></div>
        <h1 className='font-[800] text-center text-[36px] pb-[23px] lg:text-6xl md:text-5xl'>You got the travel plans, we got the travel vans.</h1>

        <p className='text-[16px] font-lg leading-[24px] pb-[52px] lg:text-xl md:text-xl text-center'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

        <button className='w-[100%] flex items-center justify-center bg-[#FF8C38] p-3 text-[16px] font-[700] rounded-[5px] lg:text-3xl md:text-2xl max-w-[60rem]'>Find your van</button>
    </section>
  )
}

export default Home
