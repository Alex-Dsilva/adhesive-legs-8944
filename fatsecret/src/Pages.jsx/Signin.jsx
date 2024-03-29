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
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

const userLogin = ({data})=>{
  return axios.post ("https://reqres.in/api/register",{
      email:data.email,
      password:data.password
    })
}

const Signin = () => {

  const auth = getAuth();

  const inti ={
    email:"",
   password:"",
  }
  const Googleprovider = new GoogleAuthProvider();
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

    const handleGooglelogin = () => {
      value.dispatch(loginRequest("Processing"))
      signInWithPopup(auth, Googleprovider)
        .then((userCredential) => {
          const { displayName, uid } = userCredential.user;
          console.log(displayName, uid);
          value.dispatch(loginSuccess(uid))
        }).catch((err) => {
        alert(err.message);
        value.dispatch(loginFailure("error"));
      });}
    
      const handleSubmit =(e) =>{
      e.preventDefault()
      value.dispatch(loginRequest("Processing"))
      console.log(data)
      signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
          value.dispatch(loginSuccess(res.user.uid));
          console.log(res)
        })
        .catch((err) => {
          alert(err)
          value.dispatch(loginFailure("error"));
        });
      
  
    }
  return (
    <Box>

    
    <Flex m="auto" direction="column" mt='10px' mb='15px' maxW="lg" justify="center" borderWidth='1px' p='50px' align="center" gap="20px">
      <VStack>
        <Button bg='blue.400' onClick={handleGooglelogin} color='whiteAlpha.900' leftIcon={<AiFillGoogleCircle />}>
        Continue with Google
        </Button>
      </VStack>

      <Text fontSize='md' fontWeight='bold'>or sign in with your FatSecret account</Text>
      <Input htmlSize={40} width='auto' type="email" name="email" onChange={handlChange} placeholder='Enter Your Email' />
      <Input htmlSize={40} width='auto' type="password" name="password" onChange={handlChange} placeholder='Enter Your Password' />
      <Button onClick={handleSubmit} colorScheme='teal' variant='solid'> Submit</Button>
      <Link href='https://www.fatsecret.co.in/Default.aspx?pa=p' isExternal>Forgot Password?</Link>
      <Checkbox fontSize='xs' justifySelf='left'>Remember Me</Checkbox>
      <Text>Register Today! 100% free!</Text>
      <Text>Become a member! <Link to="/Signup">Create Account</Link></Text>
    </Flex>

    
    </Box>
  );
};

export default Signin