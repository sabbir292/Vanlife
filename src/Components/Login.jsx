import { useLoaderData, Form, useActionData, useNavigation } from 'react-router-dom'
import { useEffect } from 'react'
import { redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword , onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from './Api'
import { useState } from 'react'

export function authMessageLoader( {request} ){
    return new URL(request.url).searchParams.get('message')
}

export async function action( {request} ){
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const pathName = new URL(request.url).searchParams.get('redirectTo') || '/host'
    console.log(pathName)
        try{
            const user = await signInWithEmailAndPassword(auth, email, password)
            // console.log(user)
            localStorage.setItem('isLoggedIn', true)
            return redirect(pathName)
        }catch(err){
            return err
        }
}


const Login = () => {
    const [User, setUser] = useState({})

     useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

    const message = useLoaderData()
    const err = useActionData()
    const loginState = useNavigation().state 

  return (
    <section className='flex flex-col items-center justify-center min-h-[75vh] px-[28px]'>
      { !User ? <div className='w-full'>

        <div className='flex flex-col items-center justify-center gap-5 mb-12'>
            <h1 className='text-2xl font-extrabold'>Sign in to your account</h1>
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
                className = 'border border-black outline-none rounded-sm p-2'
                 />
            <input 
                type="password"
                placeholder='Password'
                name='password'
                className = 'border border-black outline-none rounded-sm p-2'
                 />
            <button 
                className="btn bg-[#FF8C38] w-full mt-6 text-white font-semibold"
                disabled= {loginState==='submitting'} 
                >{loginState === 'submitting'? 'Logging in': 'Login/Sign in'}</button>
            <p className='text-sm pt-14 font-medium mx-auto'>Don't have an account? <Link to='/signup' className='text-[#FF8C38]'>Create one account</Link></p>
        </Form>
        </div> :
            <div className='w-full flex flex-col item-center'>
                <h1 className='text-2xl font-extrabold text-center'>You are already logged in! Do you want to Signout?</h1>
                <button 
                onClick={()=>signOut(auth)}
                className="btn bg-[#FF8C38] w-full mt-6 text-white font-semibold"
                >Signout</button>
            </div>
        }
    </section>
  )
}

export default Login
