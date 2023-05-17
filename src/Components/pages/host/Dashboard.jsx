import { React, Suspense } from 'react'
import { defer, Link, Await } from 'react-router-dom'
import { getHostVans } from '../../Api'
import { authRequired } from '../../utils'
import { useLoaderData } from 'react-router-dom'
import { TraceSpinner } from 'react-spinners-kit'


export async function loader({ request }) {
  await authRequired(request)
  return defer({vans:getHostVans()})
}

const Dashboard = () => {
  const vandataPromise = useLoaderData()
  console.log(vandataPromise)

  return (
    <div>

      <div>
        <div>
          <h1>Welcome!</h1>
          <p>income last <span>30 days</span></p>
          <h1>$2,260</h1>
        </div>
        <Link>Details</Link>
      </div>

      <div>
        <div>
          <h3>Review score <span>&#x2B50;</span> 5.0/<span>5</span></h3>
        </div>
      </div>

      <div>
        <div>
          <h3>Your listed vans</h3>
          <Link>view all</Link>
        </div>

        <div>
          <Suspense fallback={<TraceSpinner size={40} color="#00ff89"/>}>

          <Await resolve={vandataPromise.vans}>
            {(vandata) => {
              return vandata?.map((item) => {
                const { id, name, price, imageUrl } = item
                return (
                    <div key={id} className='my-5 bg-white  rounded-md flex items-center p-4'>
                      <Link to={`${id}`} className='flex gap-5 items-center h-18'>
                        <img className='object-cover rounded-sm h-16' src={imageUrl} alt='Vans' />
                        <div>
                          <h4 className='text-sm font-semibold'>{name}</h4>
                          <p className='text-sm'>${price}/day</p>
                        </div>
                      </Link>
                        <Link className='ml-auto'>Edit</Link>
                    </div>
                )
              })
            }}
          </Await>
          </Suspense>


        </div>

      </div>


    </div>
  )
}

export default Dashboard
