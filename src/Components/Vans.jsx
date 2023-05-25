import { Suspense } from 'react'
import { Link, useSearchParams, useLoaderData, Await, defer } from 'react-router-dom'
import { TraceSpinner } from "react-spinners-kit"
import { getVans } from './Api'

export function loader() {
  return defer({ vans: getVans() })
}

const Vans = () => {

  const vandataPromise = useLoaderData()

  // filter van using useSearchFilter
  const [searchParam, setSearchPram] = useSearchParams()
  const typeFilter = searchParam.get('type')
  // console.log(searchParam.toString())

  function renderVanEls(vandata){
    let displayVans = typeFilter ? vandata.filter(van => van.type.toLowerCase() === typeFilter) : vandata


    const uniqueType = vandata.reduce((types, item) => {
      if (!types.includes(item.type)) {
        return [...types, item.type]
      }
      return types
    }, [])

    return (
      <>
        <div className='flex items-center gap-4'>
        {/* one isssue here is if vans get another type then i have to add that type a color manually if it get filter by it. need to fix it */}
          {uniqueType.map((item, index) => (
            <button className={`category-btn ${typeFilter === item ? 'active-filter' : ''} ${typeFilter === 'simple' && 'simple'} ${typeFilter === 'luxury' && 'luxury'} ${typeFilter === 'rugged' && 'rugged'} btn lg:text-lg`} key={index} onClick={() => setSearchPram({ type: item })}>{item}</button>
          ))
          }

          {typeFilter && <Link to='.' className='border-b border-black text-[12px] leading-[18px]'>clear filters</Link>}
        </div>
        <div className='grid grid-cols-2 gap-[34px] mt-4 place-items-center lg:grid-cols-3'>


          {
            displayVans.map((item) => {
              const { id, name, price, imageUrl, type } = item
              return (
                <div 
                  key={id}>
                  <Link
                    to={`${id}`}
                    state={{
                      search: `?${searchParam.toString()}`,
                      type: typeFilter,
                    }}>
                    {/* here we passing the state to the next route, stae will include whatever in the link excliding the main path. so we can use that to get back the same state if like any filter is added in this case we can get back to ite */}
                    <img className='object-cover rounded-md my-4' src={imageUrl} alt="" />
                    <div className='flex justify-between'>
                      <h4 className='text-[#161616] text-[20px] leading-[32px] font-[600] lg:text-3xl'>{name}</h4>
                      <div>
                        <h4 className='text-[#161616] text-[20px] leading-[32px] font-[600] lg:text-2xl'>${price}</h4>
                        <p className='text-sm mt-[-6px] lg:text-lg'>/day</p>
                      </div>
                    </div>
                    <button className={`${type === 'simple' && 'bg-[#E17654]'} ${type === 'luxury' && 'bg-[#161616]'} ${type === 'rugged' && 'bg-[#115E59]'} btn text-[#FFFFFF] lg:text-lg`}>{type}</button>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </>
    )
  }

  return (
    <section className={'px-[26px] bgprimary mb-32 box-border overflow-x-hidden lg:px-[20%] lg:mb-48'}>

      <h2 className='text-[#161616] text-[32px] py-[22px] leading-[34px] font-[700] lg:text-5xl'>Explore our van options</h2>
    <Suspense fallback={<TraceSpinner size={40} color="#00ff89"/>}>
      <Await resolve={vandataPromise.vans}>
          {renderVanEls}
      </Await>
    </Suspense>
    </section>
  )
}

export default Vans



