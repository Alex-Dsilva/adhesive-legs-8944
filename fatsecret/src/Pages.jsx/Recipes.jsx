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

const Recipes = () => {
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

    } )
    .catch((err)=>console.log(err))
  }

  const showClick=(el)=>{

    onOpen()
    setval(el)
    
  }

  console.log('val',val.recipe.ingredients)
  // Search Recipes from a large collection
  return (
    <Box>
    <Box  h='380px' bgImage='url("https://thumbs.dreamstime.com/z/set-different-food-products-light-background-vegetables-fruits-opposed-to-protein-carbohydrate-foods-space-text-flat-180704060.jpg")' bgSize='cover' bgPosition="center">
   <Box p='10px' bg='rgba(0,0,0, 0.4)' h='100%' display='flex' flexDir='column' alignItems='center' justify='center' textAlign='center'  >
    <Text fontSize='4xl' pt='20px' letterSpacing='1px' textAlign='center'   fontWeight='600'>Find Your Perfect Recipe</Text>
   <br/>
   <Text as='em' fontWeight='500' pt='10px' > "A Recipe is a story  that ends wih a good meal" </   Text>
   <br/>
    <Text as='cite' fontWeight='500' >- Pat Conroy</Text>

   <Box display='flex' flexDir={{base:"column",sm:"column",md:"row",lg:"row", xl: 'row'}} gap='10px' w={{base:"80%",sm:"80%",md:"50%",lg:"30%", xl: '30%'}} m='auto' pt='20px'>
   <Input placeholder='Search Your Recipe' onChange={handleChange} _placeholder={{ opacity: 1,    color: 'black', fontSize:'18px' }} />
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
      <Box display='flex' flexDir='column' gap='20px'>
        <Text fontWeight='500' fontSize='20px'>Ingredents you want . . .</Text>
       {val.recipe.ingredients.map((el,index)=>{
        return(
          <Box display='flex' justifyContent='justify' alignItems='center' gap='20px'>
            <Image h='100px' src={el.image} alt='elfood'/>
            <Text fontSize='20'  >{el.text}</Text>
          </Box>
        )

       })}
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

export default Recipes
