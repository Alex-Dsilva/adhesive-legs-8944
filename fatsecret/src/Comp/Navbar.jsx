import { Box, Image,Spacer,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

// color="whiteAlpha.900"

const Navbar = () => {
  return (
    <Box display="flex"  gap="10px" p="10px" fontWeight="700" bg='green.300' alignItems='center' color="whiteAlpha.900" w='100%' pos="absolute"  top="0px" h="40px">
      <Link to="/" w={{base:"40%",sm:"30%" ,md:"15%" ,lg:"15%" , xl: "15%" }} overflow="hidden"><Image src="https://static.fatsecret.com/static/images/splash/FS_Logo_SplashScreen.png" h={{base:"30px",sm:"20px",md:"25px",lg:"30px", xl: '30px'}} alt="Fatsecret_logo"/></Link>
      <Box w={{base:"0px",sm:"65%",md:"65%",lg:"75%", xl: '75%'}} display={{base:"none",sm:"none",md:"flex",lg:"flex", xl: 'flex'}} alignItems="center" gap={{base:"10px",sm:"5px",md:"7px",lg:"40px", xl: '40px'}} pt="2px">
      <Link  to="/Foods">Foods</Link>
      <Link  to="/Fitness">Fitness</Link>
      <Link  to="/Recipes">Recipes</Link>
      <Link  to="/Community">Community</Link>  
      </Box>
      <Box display={{base:"none",sm:"none",md:"flex",lg:"flex", xl: 'flex'}} w={{base:"1%",sm:"1%",md:"5%",lg:"6.6%", xl:"6.6%"}} gap="3px">
        <Text color="black.500">INDIA</Text>
       <Image  border="1px solid black" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAdVBMVEX/mTMSiAf/////lin/u4N7rnoAhQAAAHb5+fzt7fX19fkAAIIAAHyUlL7i4u6Hh7cAAIdlZabX1+exsdGXl8Tc3OrPz+Orq8yRkb/IyN02NpRcXKKMjLi/v9qOjr+hocRRUZ2AgLMLC4kbG4g+PpRvb6tLS5yC6aPSAAABUklEQVRoge2WbW+EIAyAXfcCVMATVOTUoed5//8njlz2dYlZaLYPfdJE/PKkAdpSVQzDMAzDMAzzF7wSUr0RUgEh/0aO/TD0SCFHv+61EPW++tP+s/Kwi/vYxtiOd7GHonI56SNZBSqHTYeeZDk5XutJIThprXSAaqqvp7bmlPxRRwkLOOty5IWM9aOU3OgWBlCL8s75/Mk/rTZl5EpvCDJAsvMwzDZBkICbVkXkRiwqIhrbfKb02ViDGNUiTqR+Qn5bVU7c981oxhxN7wOCWm8l5Fb7fJDoNmO6jDGbw95Zr20B+aKbXPhhHufuuFyOLi9CbgKNXgrIvbAqpx7T2F0ynUkx30hlhSeQjyXlpNtCeqCkV5G2iEjLn7RxfbfcSNNyaYfFc8x1RGMOSAc00D4tnn6yR9FvoJW/E1J9EFK9EMJylrOc5SxnOctZznKW/8QXesNF4ZJCeSYAAAAASUVORK5CYII="borderRadius="50%" h="23px" alt="Fatsecret_logo"/>
      </Box>
    </Box>
  )
}

export default Navbar
