import React, { useState } from 'react'
import { useLoaderData, Form } from 'react-router-dom'
import { redirect } from './RedirectUtils'
import { loginUser } from './Api'

// localStorage.clear('isLoggedIn')
export function authMessageLoader( {request} ){
    return new URL(request.url).searchParams.get('message')
}

export async function action( {request} ){
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const data = await loginUser({email,password})
console.log(data)
    localStorage.setItem('isLoggedIn', true)
    return redirect('/host')
    // return null
}


const Login = () => {
    const message = useLoaderData()

    const [loginDetails, setLoginDetails] = useState({email: '', password: '',})
    const [status,setStatus] = useState('idle')
    const [error, setError] = useState(null)


    function handleChange(e){
        const {name,value} = e.target
        setLoginDetails(prev =>({
            ...prev,
            [name]: value
        }))
        

    }

    function handleSubmit(e){
        e.preventDefault()
        setStatus('submitting')
        setError(null)
        async function varifyUser(){
            const user = await loginUser(loginDetails)
            .catch(err=> setError(err))
            .finally(setStatus('idle'))
            console.log(user)
        }
        varifyUser()
    }
    console.log(status)
  return (
    <section className='flex flex-col items-center justify-center min-h-[75vh] px-[28px]'>
        <div className='flex flex-col items-center justify-center gap-5 mb-12'>
            <h1 className='text-2xl font-extrabold'>Sign in to your account</h1>
            {message && <h2 className='text-red-500 font-medium text-xl'>***{message}***</h2>}
            {/* {error && <h2 className='text-red-500 font-medium text-md'>{error.message}</h2>} */}
        </div>
        <Form 
            className='flex flex-col item-center justify-center gap-1 w-full font-medium'
            method='post'>
            <input 
                type="email"
                placeholder='Email address'
                name='email'
                // value={loginDetails.email}
                // onChange = {handleChange}
                className = 'border border-black outline-none rounded-sm p-2'
                 />
            <input 
                type="password"
                placeholder='Password'
                name='password'
                // value={loginDetails.password}
                // onChange = {handleChange}
                className = 'border border-black outline-none rounded-sm p-2'
                 />
            <button disabled= {status==='submitting'} className="btn bg-[#FF8C38] w-full mt-6 text-white font-semibold">Login</button>
            <p className='text-sm pt-14 font-medium mx-auto'>Don't have an account? <span className='text-[#FF8C38]'>Create one account</span></p>
        </Form>
    </section>
  )
}

export default Login
