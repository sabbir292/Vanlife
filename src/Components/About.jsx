import React from 'react'
import aboutbg from '../assets/about.png'

const About = () => {
    // const bgabout = {
    //     backgroundImage: `url(${aboutbg})`
    // }
  return (
    <section className='inter text-[#161616] bgprimary overflow -x-hidden mb-auto'>
            <img className='w-[100%] max-h-[234px] mb-4 object-cover' src={aboutbg} alt="" />
        <div>
            <div className='px-[28px]'>
                <h2 className='font-[700] leading-[38px] text-[32px] my-10'>Don’t squeeze in a sedan when you could relax in a van.</h2>

                <p className='text-[16px] leading-[22px] font-[500] mb-4'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>

                <p className='text-[16px] leading-[22px] font-[500 mb-6'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>

            <div className='mx-[28px] px-[38px] py-[32px] my-[53px] bg-[#FFCC8D] rounded-sm sm:h-[198px]'>
                <h3 className='text-[24px] leading-[30px] font-[700] mb-[25px]'>Your destination is waiting.Your van is ready.</h3>
                <button className='bg-[#161616] text-[#FFFFFF] px-[22px] py-[12px] rounded-md'>Explore our vans</button>
            </div>
        </div>
    </section>
  )
}

export default About
