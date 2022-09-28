import { Box, Image,Spacer,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box display="flex"  alignItems="center" p="10px" gap="40px" fontWeight="500" >
      <Link to="/" w="15%" ><Image src="https://static.fatsecret.com/static/images/def20/Fatsecret_logo.png" h="30px" alt="Fatsecret_logo"/></Link>
      <Box w="74%" display="flex" alignItems="center" gap="20px" pt="3px">
      <Link to="/Foods">Foods</Link>
      <Link to="/Fitness">Fitness</Link>
      <Link to="/Recipes">Recipes</Link>
      <Link to="/Community">Community</Link>
      </Box>
      <Box display="flex" w="6.5%">
        <Text>INDIA  </Text>
        <Spacer />
       <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAdVBMVEX/mTMSiAf/////lin/u4N7rnoAhQAAAHb5+fzt7fX19fkAAIIAAHyUlL7i4u6Hh7cAAIdlZabX1+exsdGXl8Tc3OrPz+Orq8yRkb/IyN02NpRcXKKMjLi/v9qOjr+hocRRUZ2AgLMLC4kbG4g+PpRvb6tLS5yC6aPSAAABUklEQVRoge2WbW+EIAyAXfcCVMATVOTUoed5//8njlz2dYlZaLYPfdJE/PKkAdpSVQzDMAzDMAzzF7wSUr0RUgEh/0aO/TD0SCFHv+61EPW++tP+s/Kwi/vYxtiOd7GHonI56SNZBSqHTYeeZDk5XutJIThprXSAaqqvp7bmlPxRRwkLOOty5IWM9aOU3OgWBlCL8s75/Mk/rTZl5EpvCDJAsvMwzDZBkICbVkXkRiwqIhrbfKb02ViDGNUiTqR+Qn5bVU7c981oxhxN7wOCWm8l5Fb7fJDoNmO6jDGbw95Zr20B+aKbXPhhHufuuFyOLi9CbgKNXgrIvbAqpx7T2F0ynUkx30hlhSeQjyXlpNtCeqCkV5G2iEjLn7RxfbfcSNNyaYfFc8x1RGMOSAc00D4tnn6yR9FvoJW/E1J9EFK9EMJylrOc5SxnOctZznKW/8QXesNF4ZJCeSYAAAAASUVORK5CYII="borderRadius="50%" h="25px" alt="Fatsecret_logo"/>
      </Box>
    </Box>
  )
}

export default Navbar
