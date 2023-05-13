import { Link, useLocation, useLoaderData} from 'react-router-dom'
import { getVans } from './Api'

export function vanDetailsLoader( {params} ){
    console.log(params)
    return getVans(params.id)
}


const Vandetails = () => {

    const VanDetails = useLoaderData()
    const {id,name,price,description,imageUrl,type} = VanDetails
    const location = useLocation()
    // here we are catcing that state we have sent , using uselocation.
  

    const search = location.state?.search || ''
    const btnType = location.state?.type || 'all'

    return (
        <section className='px-[23px] py-10 bgprimary inter'>
            { Vandetails ? (<div>
                <Link 
                    className='text-[16px] border-black border-b font-[500] mb-6' 
                    relative='path'
                    to={`..${search}`}
                    >&#8592; Back to {btnType} vans</Link>
                    <img className='object-cover rounded-md my-6 pb-4' src={imageUrl} alt="" />
                    <button className={`${type === 'simple' && 'bg-[#E17654]'} ${type === 'luxury' && 'bg-[#161616]'} ${type === 'rugged' && 'bg-[#115E59]'} btn text-[#FFFFFF] mb-4`}>{type}</button>
                    <div className=''>
                        <h4 className='text-[#161616] text-[20px] leading-[32px] font-[600]'>{name}</h4>
                        <div className='flex gap-0 items-center mb-4'>
                            <h4 className='text-[#161616] text-[20px] leading-[32px] font-[600]'>${price}</h4>
                            <span className='text-sm'>/day</span>
                        </div>
                            <p className='mb-6 font-[500] leading-[24px] text-[16px]'>{description}</p>
                    </div>
                    <button className='w-[100%] flex items-center justify-center bg-[#FF8C38] p-3 text-[16px] font-[700] rounded-[5px] text-[#FFFFFF]'>Rent this van</button>
            </div> ) : <h2>Loading...</h2> } 
        </section>
    )
}

export default Vandetails