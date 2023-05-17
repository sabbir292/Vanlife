import React from 'react'
import { useLoaderData,Form, useActionData, useNavigation } from 'react-router-dom'
import { auth } from './Api'
// import { redirect } from './RedirectUtils'
import { redirect } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export async function loader( {request} ){
    return new URL(request.url).searchParams.get('message')
}

export async function action( {request} ){
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const pathName = new URL(request.url).searchParams.get('redirectTO') || '/host'
    try{
        const user = await createUserWithEmailAndPassword(auth, email, password)

        redirect(pathName)
    }catch (err){
        return await err
    }
}


const Signup = () => {

    const message = useLoaderData()
    const err = useActionData()

    return (
        <section className='flex flex-col items-center justify-center min-h-[75vh] px-[28px]'>
            <div className='flex flex-col items-center justify-center gap-5 mb-12'>
                <h1 className='text-2xl font-extrabold'>Create a new account!</h1>
                {message && <h2 className='text-red-500 font-medium text-xl'>***{message}***</h2>}
                {err && <h2 className='text-red-500 font-medium text-md'>{err.message}</h2>}
            </div>
            <Form
                className='flex flex-col item-center justify-center gap-1 w-full font-medium'
                method='post'
                replace
            >

                <input
                    type="email"
                    placeholder='Email address'
                    name='email'
                    className='border border-black outline-none rounded-sm p-2'
                />
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    className='border border-black outline-none rounded-sm p-2'
                />
                <button
                    className="btn bg-[#FF8C38] w-full mt-6 text-white font-semibold"
                    
                >Sign Up</button>
            </Form>
        </section>
    )
}

export default Signup
