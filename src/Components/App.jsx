import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Layout from './Layout'
import Home from './Home'
import About from './About'
import Vans from './Vans'
// Van nesting routs:
import Vandetails from './Vandetails'
import Host from './Host'
// Host nesting routs:
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Yourvans from './pages/host/Yourvans'
// Your van Nesting routs:
import YourVanDetails from './pages/YourVanDetails'
//Your van details nesting routes:
import Details from './pages/host/Details'
import Pricing from './pages/host/Pricing'
import Photos from './pages/host/Photos'

import Reviews from './pages/host/Reviews'


import '../Server'

const App = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path='host' element={<Host />}>
                       <Route index element={<Dashboard />}/>
                       <Route path='income' element={<Income />}/>
                       <Route path='vans' element={<Yourvans />}/>
                       
                       <Route path='vans/:id' element={<YourVanDetails />}>
                           <Route index element={<Details />} />   
                           <Route path='pricing' element={<Pricing />} />   
                           <Route path='photos' element={<Photos />} />   
                       </Route>

                       
                       <Route path='reviews' element={<Reviews/>}/>
                    </Route>

                    <Route path='about' element={<About />} />
                    <Route path='vans' element = {<Vans />} />
                    <Route path='vans/:id' element = {<Vandetails />} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default App
