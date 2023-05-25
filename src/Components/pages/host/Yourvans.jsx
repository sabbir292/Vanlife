import React, { Suspense } from 'react'
import { Link, useLoaderData , defer, Await,} from 'react-router-dom'
import { getHostVans } from '../../Api'
import {authRequired} from '../../utils'
import { TraceSpinner } from "react-spinners-kit";


export async function hostVanLoader({request}){
    await authRequired(request)

    return defer ({vans:getHostVans()})
}

const Yourvans = () => {
  const hostVansPromise = useLoaderData()
  // console.log(hostVansPromise)

  return (
      <section className='my-14 bgprimary flex-1'>
      <h2 className='text-2xl leading-8 font-bold lg:text-4xl'>Your listed vans</h2>
      <Suspense fallback={<TraceSpinner size={40} color="#00ff89"/>}>

      <Await resolve={hostVansPromise.vans}>
      {(vandata) =>
          vandata.map((item) => {
            {/* console.log(vandata) */}
            const { id, name, price, imageUrl } = item
            return (
              <div key={id} className='my-5 bg-white  rounded-md flex items-center p-4'>
                <Link to={`${id}`} className='flex gap-5 items-center h-18'>
                  <img className='object-cover rounded-sm h-16 lg:h-44' src={imageUrl} alt='Vans' />
                  <div>
                    <h4 className='text-sm font-semibold lg:text-2xl'>{name}</h4>
                    <p className='text-sm lg:text-xl'>${price}/day</p>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </Await>
      </Suspense>
      </section>
  )
}

export default Yourvans

