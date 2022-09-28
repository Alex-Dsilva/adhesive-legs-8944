import React from 'react'
import {Routes,Route} from "react-router-dom"
import Community from './Community'
import Fitness from './Fitness'
import Foods from './Foods'
import Landing from './Landing'
import Recipes from './Recipes'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Foods" element={<Foods/>} />
        <Route path="/Fitness" element={<Fitness/>}/>
        <Route path="/Recipes" element={<Recipes/>}/>
        <Route path="/Community" element={<Community/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
