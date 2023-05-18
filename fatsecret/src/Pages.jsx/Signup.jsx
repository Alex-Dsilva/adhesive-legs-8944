import React, { useId } from "react";
import { Input, Text,Button, Flex, VStack, Box, Checkbox} from "@chakra-ui/react"
import { useState } from 'react'  
import axios from 'axios'
import { useContext } from 'react'
import { Navigate, Link} from 'react-router-dom'
import { loginFailure, loginRequest, loginSuccess } from "../API/action"
import {AuthContext} from "../API/AuthContext"
import {AiFillFacebook, AiFillGoogleCircle} from 'react-icons/ai'
import { app, db } from "../config/firebaseConfig"
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const userLogin = ({data})=>{
  return axios.post ("https://reqres.in/api/register",{
      email:data.email,
      password:data.password
    })
}

const Signup = () => {

  const auth = getAuth();

  const inti ={
    email:"",
   password:"",
  }
  const [data,setData] = useState(inti)

  const value= useContext(AuthContext)
  // console.log(value)

  if(value.state.isAuth)
    {
      return <Navigate to="/"/>
    }

    const handlChange =(e)=>{
      const {name:key,value} = e.target
      
      setData({
        ...data,
        [key]:value
      })
      console.log({data})
    }
    
      const handleSubmit =(e) =>{
      e.preventDefault()
      value.dispatch(loginRequest("Processing"))
      if (data.name !== undefined || "") {
        if (data.email !== undefined || "") {
          // console.log("hi");
          createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {
              updateProfile(auth.currentUser, {
                displayName: data.username,
              })
          value.dispatch(loginSuccess(res.user.uid));
          console.log(res)
        })
        .catch((err) => {
          alert(err)
          value.dispatch(loginFailure("error"));
        })}}}

  return (
    <Box>

    
    <Flex m="auto" direction="column" mt='10px' mb='15px' maxW="lg" justify="center" borderWidth='1px' p='50px' align="center" gap="20px">
      <Input htmlSize={40} width='auto' type="text" name="name" onChange={handlChange} placeholder='Enter Your name' />
      <Input htmlSize={40} width='auto' type="email" name="email" onChange={handlChange} placeholder='Enter Your Email' />
      <Input htmlSize={40} width='auto' type="password" name="password" onChange={handlChange} placeholder='Enter Your Password' />
      <Button onClick={handleSubmit} colorScheme='teal' variant='solid'> Submit</Button>
      <Checkbox fontSize='xs' justifySelf='left'>Remember Me</Checkbox>
      <Link to="/Signin">SignIn </Link>
    </Flex>

    
    </Box>
  );
};

export default Signup