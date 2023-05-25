import React from 'react'

const Footer = () => {
  return (
   <footer className='w-[100%] min-h-[8vh] bg-[#252525] py-6 text-[#AAAAAA] flex items-center justify-center leading-[23px] text-sm font-semibold absolute bottom-0 left-0'>
        <div className=''>©️ {new Date().getFullYear()} #VANLIFE</div>
   </footer>
  )
}

export default Footer
