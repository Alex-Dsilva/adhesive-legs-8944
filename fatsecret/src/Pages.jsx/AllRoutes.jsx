import { Box } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Community from './Community'
import Fitness from './Fitness'
import Foods from './Foods'
import Landing from './Landing'
import Recipes from './Recipes'
import Signin from './Signin'
import Signup from './Signup'
import PrivateRoute from '../Comp/PrivateRoute'

const AllRoutes = () => {
  return (
    <Box pt="50px">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Foods" element={
          <PrivateRoute>
              <Foods/>
          </PrivateRoute>
        } />
        <Route path="/Fitness" element={
          <PrivateRoute>
          <Fitness/>
        </PrivateRoute> 
        }/>
        <Route path="/Recipes" element={
          <PrivateRoute>
          <Recipes/>
        </PrivateRoute> 
        }/>
        <Route path="/Community" element={
          <PrivateRoute>
          <Community/>
          </PrivateRoute> 
        
        }/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </Box>
  )
}

export default AllRoutes
