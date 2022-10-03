import { Box, Button, Input, Text, Grid, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Recipe from '../Comp/Recipe';
import Instatedata from '../Comp/Instatedata'






const getdata=(query)=>{
  return axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=974288a7&app_key=b646b7c4661c2c0d4b838cff1cd1fda9`)
}


const Foods = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [query,setquery]=useState('healthy')

  const [data,setdata]=useState([])

  const [val,setval]=useState(Instatedata)

  const handleChange=(e)=>{
    const Input =e.target.value
    setquery(Input)
  }

  useEffect(()=>{
    getdata(query)
    .then((res)=> {
      setdata(res.data.hits)
      // console.log(res.data.hits)
    } )
    .catch((err)=>console.log(err))
  },[])
  

  const handleClick=()=>{
    getdata(query)
    .then((res)=> {
      setdata(res.data.hits)
      // console.log(res.data.hits)
    } )
    .catch((err)=>console.log(err))
  }

  const showClick=(el)=>{

    onOpen()
    setval(el)
    
  }

  console.log('val',val.recipe.label)

  return (
    <Box>
        <Box  h='380px' bgImage='url("https://static.toiimg.com/thumb/msid-47442718,width-800,height-600,resizemode-75/47442718.jpg")' bgSize='cover' bgPosition="center">
       <Box p='10px' bg='rgba(0,0,0, 0.3)' h='100%' display='flex' flexDir='column' alignItems='center' justify='center' textAlign='center'  >
        <Text fontSize='4xl' pt='20px' letterSpacing='1px' textAlign='center'   fontWeight='600'>Search Your Todays Meal</Text>
       <br/>
       <Text as='em' fontWeight='500' pt='10px' > "A healthy outside starts from the inside " </   Text>
       <br/>
        <Text as='cite' fontWeight='500' >-Robert Urich</Text>

       <Box display='flex' flexDir={{base:"column",sm:"column",md:"row",lg:"row", xl: 'row'}} gap='10px' w={{base:"80%",sm:"80%",md:"50%",lg:"30%", xl: '30%'}} m='auto' pt='20px'>
       <Input placeholder='Search Your Food' onChange={handleChange} _placeholder={{ opacity: 1,    color: 'black', fontSize:'18px' }} />
        <Button onClick={handleClick} ><Text fontWeight='600' >Search</Text ></Button>
       </Box>
      </Box>
    </Box>
    {val? <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{val.recipe.label}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' flexDir='column'  justify="center">
          <Image h='200px' w='100%' src={val.recipe.image} alt={val.recipe.label}/>
          <Box>
            <Text>Cautions : {val.recipe.cautions[0]}</Text>
            <Text>Meal Type : {val.recipe.mealType[0]}</Text>
            <Text>{val.recipe.totalNutrients.CHOCDF.label} : {val.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} {val.recipe.totalNutrients.CHOCDF.unit}</Text>
            <Text>{val.recipe.totalNutrients.ENERC_KCAL.label} : {val.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)} {val.recipe.totalNutrients.ENERC_KCAL.unit}</Text>
            <Text>{val.recipe.totalNutrients.FAT.label} : {val.recipe.totalNutrients.FAT.quantity.toFixed(2)} {val.recipe.totalNutrients.FAT.unit}</Text>
            <Link href={val.recipe.url} isExternal>
            Learn More <ExternalLinkIcon mx='2px' />
            </Link>
          </Box>
          </ModalBody>

          <ModalFooter>
            <Button  colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>:<Box></Box>}
    
      
      <Grid templateColumns='repeat(4,1fr)' w='100%' gap='20px' p='50px'>
        {data.map((el,index)=>{
          return <Recipe key={index} recipe={el.recipe} onClick={()=>showClick(el)}/>
        })}
      </Grid>



    </Box>
    

  )
}

export default Foods
