import { Link, Box, Button, Flex, Grid, GridItem, Image, ListItem, Modal, ModalBody, ModalContent, Spacer, Text, UnorderedList } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
// import { Link as Reachlink } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import img from "../assets/fit.jpg"

const Landing = () => {

  


  return (
    <Box>

      <Box>
            < Image src='https://a.ftscrt.com/static/images/splash/Sunrise_BG_01.jpg' alt='fatscbg' pos="fixed" top="0px" zIndex={-100} h="100%"/>
      </Box>


      <Box pl="40px" pt="50px" display="flex" flexDir="column" gap="30px" h="100vh">
        <Text textShadow='1px 1px black'  fontWeight="500" color="whiteAlpha.900" fontSize='46px'>Your Key to Success</Text>
        <Image src="https://static.fatsecret.com/static/images/splash/FS_Logo_SplashScreen.png" w="40%" h={{base:"40px",sm:"50px",md:"85px",lg:"95px", xl: '95px'}} alt="Fatsecret_logo"/>
        <Box as='button' bg="green.500" fontWeight="500" color="whiteAlpha.900" _hover={{bg:"green.600"}} fontSize='22px' w={{base:"30%",sm:"23%",md:"18%",lg:"18%", xl: '18%'}}  h="10" textShadow='0.5px 1px black' >Start for Free</Box>
        <Text color="#fff" textShadow='2px 2px black' fontSize='18px' fontWeight="500" >Already a member? <Text as='ins' ><Link to="/Signin">Sign in</Link></Text></Text>
        <Text color="#000" fontSize="17px" fontWeight="500">Start losing weight the healthy way with easy to use apps, online tools and support.</Text>
        <Box display='flex' m="auto" pb="50px">
          <Link href="https://itunes.apple.com/in/app/calorie-counter-by-fatsecret/id347184248?mt=8" target="_blank" ><Image src='https://static.fatsecret.com/static/images/mobi/ios/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg' alt='appstore'/></Link>
          <Link href="https://play.google.com/store/apps/details?id=com.fatsecret.android" target="_blank" ><Image src='https://a.ftscrt.com/static/images/mobi/android/en_get_2.svg' alt='playstore'/></Link>
          <Image />
        </Box>
      </Box>




      <Grid templateColumns={{base:'1',sm:"1",md:"1",lg:'repeat(2, 1fr)',xl:'repeat(2, 1fr)'}} bg='#32B34C' p='2%'>
        <GridItem><Image h='100%' borderTopRightRadius='35%' borderBottomLeftRadius='35%' src='https://asoftclick.com/wp-content/uploads/2022/03/Calorie-Counter-1.jpg'/></GridItem>
          <GridItem p='14' pt='100px' display='flex' flexDir='column' alignItems="center" justifyContent="center">
            <Text fontSize='2xl' fontWeight='700' color='whiteAlpha.800'>Superb 100% FREE calorie counter apps.</Text>
            <br/>
            <Text fontSize='md' fontWeight='500' color='whiteAlpha.800'>Over 35 million people have lost weight with FatSecret. Start your weight loss journey today and get access to the world's highest quality food and nutrition database.</Text>
            <Image m='auto' src='https://static.fatsecret.com/static/images/splash/Logo_Tab_Reverse_Green.png' alt='fatsecret'/>
            <Text fontSize='2xl' fontWeight='700' color='whiteAlpha.800'>fatsecret</Text>
          </GridItem>
      </Grid>


      <Grid templateColumns={{base:'1',sm:"1",md:"1",lg:'repeat(2, 1fr)',xl:'repeat(2, 1fr)'}} bg='#EDF1E9' p='2%'>
        <GridItem p='50px' textAlign='center'>
          <Text fontSize='5xl' fontWeight='500'>Why FatSecret?</Text>
          <br/>
          <UnorderedList textAlign='left' pl='50px'>
            <ListItem>100% free, nothing to pay</ListItem>
            <ListItem>Fastest, easiest <Text fontWeight='500' as="span" color='blue.400' _hover={{textDecoration:'underline'}} >calorie counting apps</Text></ListItem>
            <ListItem>Supportive community</ListItem>
            <ListItem>Proven success</ListItem>
          </UnorderedList>
        </GridItem>
          <GridItem display='flex' flexDir='column' ml='-12' fontSize='5xl' fontWeight='500' alignItems="center" justifyContent="center">
            <Text fontSize='5xl' fontWeight='500'>Why FatSecret?</Text>
           <br/>
            <Text fontSize='md' mt='-7' textAlign='center' fontWeight='500' w='80%'>People who track food achieve more than double the average weight loss and members lose weight 3x faster when doing it with friends. FatSecret combines these to create the most powerful solution for healthy, sustainable weight loss.</Text>
        </GridItem>
      </Grid>


      <Grid templateColumns={{base:'1',sm:"1",md:"1",lg:'60% 40%',xl:'repeat(2, 1fr)'}} bg='#32B34C' p='2%' >
          <GridItem  pt='100px' display='flex' flexDir='column' alignItems="flex-start" textAlign="center">
            <Text fontSize='2xl' fontWeight='700' color='whiteAlpha.800'>All the tools to achieve your diet goals.</Text>
            <br/>
            <Grid  >
              <GridItem display='flex' alignItems='center'><Image src='https://static.fatsecret.com/static/images/splash/Check_Tick.png' alt='tick'/><Text fontSize='15px' fontWeight='500'>A FOOD DIARY To keep track of what you're eating.</Text></GridItem>
              <GridItem display='flex' alignItems='center'><Image src='https://static.fatsecret.com/static/images/splash/Check_Tick.png' alt='tick'/><Text fontSize='15px' fontWeight='500'>A large collection of healthy recipes for your diet</Text></GridItem>
              <GridItem display='flex' alignItems='center'><Image src='https://static.fatsecret.com/static/images/splash/Check_Tick.png' alt='tick'/><Text fontSize='15px' fontWeight='500'>Nutrition info for all foods, brands</Text></GridItem>
              <GridItem display='flex' alignItems='center'><Image src='https://static.fatsecret.com/static/images/splash/Check_Tick.png' alt='tick'/><Text fontSize='15px' fontWeight='500'>RDI (Recommended Daily Intake) calculator </Text></GridItem>
            </Grid>
          </GridItem>
          <GridItem><Image h='100%' borderTopRightRadius='35%' borderBottomLeftRadius='35%' src={img}/></GridItem>
      </Grid>


      <Flex flexDir={{base:'column',sm:"column",md:"column",lg:'row',xl:'row'}} bg='#93ADD2' p='2%' justifyContent='center' alignItems='center'>
      <Box><Image   src='https://static.fatsecret.com/static/images/splash/img_splash_getconnected_01_2x.png'/></Box>
          <Box p='10' textAlign='center' display='flex' flexDir='column' alignItems="center" justifyContent="center">
            <Text fontSize='5xl' fontWeight='700' color='whiteAlpha.800'>Get Connected With FatSecret</Text>
            <Text fontSize='25px' fontWeight='600' color='whiteAlpha.800'>The perfect application for keeping track of your food, exercise and weight while on-the-go</Text>
            <br/>
            <Grid  gap='10px'  >
              <GridItem display='flex' alignItems='center'  color='whiteAlpha.800'><Image src='https://static.fatsecret.com/static/images/splash/Check_Tick.png' alt='tick'/><Text fontSize='16px' fontWeight='600'>iPhone, iPod Touch and iPad</Text></GridItem>
              <GridItem display='flex' alignItems='center'  color='whiteAlpha.800'><Image src='https://static.fatsecret.com/static/images/splash/Check_Tick.png' alt='tick'/><Text fontSize='16px' fontWeight='600'>Android Phones and Tablets</Text></GridItem>
            </Grid>
          </Box>
      </Flex>

{/* Footer */}

     
    </Box>
  )  
}

export default Landing
