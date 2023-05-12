import React, { useEffect, useState } from 'react'
import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import { getVans } from './Api'


export function loader(){
  return getVans()
}

const Vans = () => {

  const vandata = useLoaderData()


  // filter van using useSearchFilte
  const [searchParam, setSearchPram] = useSearchParams()
  const typeFilter = searchParam.get('type')
  // console.log(searchParam.toString())

  let displayVans = typeFilter? vandata.filter(van=> van.type.toLowerCase()=== typeFilter): vandata

  
  const uniqueType = vandata.reduce((types, item)=>{
    if(!types.includes(item.type)){
      return [...types, item.type]
    }
    return types
  },[])

  return (
    <section className='px-[26px] pb-14 bgprimary'>
      {/* <h2 className='text-[#161616] text-[32px] py-[22px] leading-[34px] font-[700]'>Explore our van options</h2>
      <div className='flex gap-3 pb-10 justify-between'>
        <button className='category-btn'>simple</button>
        <button className='bg-[#FFEAD0] category-btn'>luxury</button>
        <button className='bg-[#FFEAD0] category-btn'>rugged</button>
        <button className='border-b border-black text-[12px] leading-[18px]'>clear filters</button>
      </div>
      <div className='grid grid-cols-2 gap-[34px]'> */}

      {/* Use links or button with setSearchparams for filter */}

      {/* Link method */}

       {/* <Link 
                key={index}
                className= 'category-btn'
                to={`?type=${item}`}>{item}</Link> */}
      {/* button method is bellow , i preffer using link because in that case we dont have to use onlick but you can do any */}
      <h2 className='text-[#161616] text-[32px] py-[22px] leading-[34px] font-[700]'>Explore our van options</h2>
      <div className='flex items-center justify-between'>
          { uniqueType.map((item,index)=> (
             <button className={`category-btn ${typeFilter === item?'active-filter': ''} ${typeFilter==='simple' && 'simple'} ${typeFilter==='luxury' && 'luxury'} ${typeFilter==='rugged' && 'rugged'} btn`} key={index} onClick={()=> setSearchPram({type:item})}>{item}</button>  
          ))
          }

        { typeFilter && <Link to='.' className='border-b border-black text-[12px] leading-[18px]'>clear filters</Link>}
      </div>
      <div className='grid grid-cols-2 gap-[34px]'>


        {
          displayVans.map((item)=>{
            const {id,name,price,imageUrl,type} = item
            return(
              <div key={id}>
                  <Link 
                    to={`${id}`} 
                    state = {{search: searchParam.toString()}}>
                  {/* here we passing the state to the next route, stae will include whatever in the link excliding the main path. so we can use that to get back the same state if like any filter is added in this case we can get back to ite */}
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
