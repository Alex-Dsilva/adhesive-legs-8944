import {Link, Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box>
         <Flex flexDir='column' bg='#111' p='2%' justifyContent='center' alignItems='center' pt='65px' gap="20px">
      <Box h='200px' textAlign='center'>
        <Image src='https://a.ftscrt.com/static/images/splash/FS_Logo_SplashScreen_Green.png' alt='logo'/>
        <br/>
        <Text fontSize='lg' color='#f0f8ff' >Get the app</Text>

        <Box display='flex' w='100%'  alignItems='center'  justifyContent='center' pt='5px' gap='20px'>
          <Link href="https://itunes.apple.com/in/app/calorie-counter-by-fatsecret/id347184248?mt=8" target="_blank" ><Image src='https://static.fatsecret.com/static/images/mobi/ios/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg' alt='appstore'/></Link>
          <Link href="https://play.google.com/store/apps/details?id=com.fatsecret.android" target="_blank" ><Image src='https://a.ftscrt.com/static/images/mobi/android/en_get_2.svg' alt='playstore'/></Link>
        </Box>
      </Box>
      <Flex>
        <Grid templateColumns='repeat(3,1fr)' gap="20px">
          <GridItem><a href="https://www.facebook.com/FatSecret"  target="_blank" ><Image src='	https://a.ftscrt.com/static/images/social/but_social_facebook.svg' alt='facbook' /></a></GridItem>
          <GridItem><a href="https://www.instagram.com/fatsecret_app/"  target="_blank" ><Image src='https://a.ftscrt.com/static/images/social/but_social_instagram.svg' alt='facbook' /></a></GridItem>
          <GridItem><a href="https://www.twitter.com/FatSecret"  target="_blank" ><Image src='https://a.ftscrt.com/static/images/social/but_social_twitter.svg' alt='facbook' /></a></GridItem>
        </Grid>
        </Flex>
        <Grid templateColumns='repeat(2,1fr)' gap="20px" pt='2'>
          <GridItem><a href="https://www.fatsecret.co.in/Default.aspx?pa=brands"  target="_blank" ><Text color='#f0f8ff' fontSize='md' >BRAND LIST</Text></a></GridItem>
          <GridItem><a href="https://www.fatsecret.co.in/Default.aspx?pa=cu"  target="_blank" ><Text color='#f0f8ff' fontSize='md'>CONTACT US</Text></a></GridItem>
        </Grid>
        <Grid templateColumns='repeat(4,1fr)'  pt='2'w='65%' textAlign='center' >
          <GridItem borderRight="1px solid white"><a href="https://www.fatsecret.co.in/Default.aspx?pa=brands"  target="_blank" ><Text color='#f0f8ff' fontSize='xs' >FIND PEOPLE</Text></a></GridItem>
          <GridItem borderRight="1px solid white" pr='10px' ><a href="https://www.fatsecret.co.in/Default.aspx?pa=cu"  target="_blank" ><Text color='#f0f8ff' fontSize='xs'>TERMS AND CONDITIONS</Text></a></GridItem>
          <GridItem borderRight="1px solid white"><a href="https://www.fatsecret.co.in/Default.aspx?pa=cu"  target="_blank" ><Text color='#f0f8ff' fontSize='xs'>PRIVACY POLICY</Text></a></GridItem>
          <GridItem><a href="https://www.fatsecret.co.in/Default.aspx?pa=cu"  target="_blank" ><Text color='#f0f8ff' fontSize='xs'>REPORT ABUSE</Text></a></GridItem>
        </Grid>
      </Flex>
     <Box display='flex' pl="30%" alignItems='center' bg='#32B34C' textAlign='center' justifyContent='center' h='35px' >
      <Text>© 2022 FatSecret. All rights reserved.</Text>
      <Box ml="40%" display={{base:"none",sm:"none",md:"flex",lg:"flex", xl: 'flex'}} justifyContent='center' alignItems='center'  w={{base:"5%",sm:"5%",md:"5%",lg:"6.6%", xl:"6.6%"}} gap="3px">
        <Text color="black.500" pt='2px' fontSize='sm' >INDIA</Text>
       <Image  border="1px solid black" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAdVBMVEX/mTMSiAf/////lin/u4N7rnoAhQAAAHb5+fzt7fX19fkAAIIAAHyUlL7i4u6Hh7cAAIdlZabX1+exsdGXl8Tc3OrPz+Orq8yRkb/IyN02NpRcXKKMjLi/v9qOjr+hocRRUZ2AgLMLC4kbG4g+PpRvb6tLS5yC6aPSAAABUklEQVRoge2WbW+EIAyAXfcCVMATVOTUoed5//8njlz2dYlZaLYPfdJE/PKkAdpSVQzDMAzDMAzzF7wSUr0RUgEh/0aO/TD0SCFHv+61EPW++tP+s/Kwi/vYxtiOd7GHonI56SNZBSqHTYeeZDk5XutJIThprXSAaqqvp7bmlPxRRwkLOOty5IWM9aOU3OgWBlCL8s75/Mk/rTZl5EpvCDJAsvMwzDZBkICbVkXkRiwqIhrbfKb02ViDGNUiTqR+Qn5bVU7c981oxhxN7wOCWm8l5Fb7fJDoNmO6jDGbw95Zr20B+aKbXPhhHufuuFyOLi9CbgKNXgrIvbAqpx7T2F0ynUkx30hlhSeQjyXlpNtCeqCkV5G2iEjLn7RxfbfcSNNyaYfFc8x1RGMOSAc00D4tnn6yR9FvoJW/E1J9EFK9EMJylrOc5SxnOctZznKW/8QXesNF4ZJCeSYAAAAASUVORK5CYII="borderRadius="50%" h="23px" alt="Fatsecret_logo"/>
      </Box>
     </Box>
      
    </Box>
  )
}

export default Footer
