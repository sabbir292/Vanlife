import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'


import Layout from './Layout'
import Home from './Home'
import About from './About'
import Vans from './Vans'
import Login, {authMessageLoader, action as loginAction} from './Login'
// Van nesting routs:
import Vandetails from './Vandetails'
import Host from './Host'
// Host nesting routs:
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Yourvans, { hostVanLoader } from './pages/host/Yourvans'
// Your van Nesting routs:
import YourVanDetails, { hostVanDetailsLoader } from './pages/YourVanDetails'
//Your van details nesting routes:
import Details from './pages/host/Details'
import Pricing from './pages/host/Pricing'
import Photos from './pages/host/Photos'

import Reviews from './pages/host/Reviews'


import Error from './Error'
import '../Server'
import { loader as vansLoader } from './Vans'
import { vanDetailsLoader } from './Vandetails'
import { authRequired } from './utils'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route
            path='vans'
            element={<Vans />}
            loader={vansLoader}
            errorElement={<Error />}
        />
        <Route
            path='vans/:id'
            element={<Vandetails />}
            loader={vanDetailsLoader}
            errorElement={<Error />}
        />
        <Route 
            path='login' 
            element={<Login />} 
            loader = {authMessageLoader}
            action = {loginAction}    
            />

        <Route path='host' element={<Host />}>
            <Route
                index
                element={<Dashboard />}
                loader={async () => await authRequired()}
            />
            <Route
                path='income'
                element={<Income />}
                loader={async () => await authRequired()}
            />
            <Route
                path='reviews'
                element={<Reviews />}
                loader={async () => await authRequired()}
            />
            <Route
                path='vans'
                element={<Yourvans />}
                loader={hostVanLoader}
                errorElement={<Error />}
            />

            <Route
                path='vans/:id'
                element={<YourVanDetails />}
                loader={hostVanDetailsLoader}
                errorElement={<Error />}
            >
                <Route index element={<Details />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='photos' element={<Photos />} />
            </Route>

        </Route>

        <Route path='*' element={<Error />} />


    </Route>
))


const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App
