import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Outlet, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../Api'
import {authRequired} from '../utils'


export async function hostVanDetailsLoader( {params} ){
    await authRequired()
    return getHostVans(params.id)
}

const YourVanDetails = () => {

    const VanDetails = useLoaderData()[0]
    const { id, name, price, description, imageUrl, type} = VanDetails

    return (
        <section className='py-10 inter'>
            {VanDetails ? (<div>
                <Link 
                    className='text-[16px] border-black border-b font-[500] mb-6' 
                    relative = 'path'
                    to = '..'
                    >&larr; Back to all vans</Link>
                    
                <div className='bg-white p-5 my-5'>

                    <div className='flex gap-5 items-center'>
                        <img className='object-cover rounded-md pb-4 h-40' src={imageUrl} alt="" />
                        <div className=''>
                            <button className={`${type === 'simple' && 'bg-[#E17654]'} ${type === 'luxury' && 'bg-[#161616]'} ${type === 'rugged' && 'bg-[#115E59]'} btn text-[#FFFFFF] mb-4`}>{type}</button>
                            <h4 className='text-[#161616] text-[20px] leading-[27px] font-bold'>{name}</h4>
                            <div className='flex gap-0 items-center mb-4'>
                                <h4 className='text-[#161616] text-[17px] leading-[27px] font-[700]'>${price}</h4>
                                <span className='text-sm'>/day</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 font-medium text-sm pb-4'>
                        <NavLink 
                            to={`.`} 
                            end
                            className={({isActive})=> isActive? 'active hover' : 'hover'}>Details</NavLink>
                        <NavLink 
                            to={`pricing`} 
                            className={({isActive})=> isActive? 'active hover' : 'hover'}>Pricing</NavLink>
                        <NavLink 
                            to={`photos`} 
                            className={({isActive})=> isActive? 'active hover' : 'hover'}>Photos</NavLink>
                    </div>
                    <Outlet context={{ VanDetails }}/>
                </div>
            </div>) : <h2>Loading...</h2>}
        </section>
    )
}

export default YourVanDetails
