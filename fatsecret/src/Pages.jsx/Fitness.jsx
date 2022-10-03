import { Box, Button, Input, Text, Grid, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Fitnesscomp from '../Comp/Fitnesscomp';
import Instatedata from '../Comp/Instatedata'


// :"back"
// 1:"cardio"
// 2:"chest"
// 3:"lower arms"
// 4:"lower legs"
// 5:"neck"
// 6:"shoulders"
// 7:"upper arms"
// 8:"upper legs"
// 9:"waist"

function getfit(part){
  const axios = require("axios");

  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}`,
    headers: {
      'X-RapidAPI-Key': '76963a5aeemshdd00dc1b23cca2ep1ae61djsn2c41dd257435',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  return axios.request(options)
}


const Fitness = () => {

  


  
    const { isOpen, onOpen, onClose } = useDisclosure()

  const [query,setquery]=useState('back')

  const [data,setdata]=useState([])

  const [val,setval]=useState(Instatedata)

  const handleChange=(e)=>{
    const Input =e.target.value
    setquery(Input)
  }

  useEffect(()=>{
    getfit(query).then( (response) =>{
      setdata(response.data)
    }).catch( (error)=> {
      console.error(error);
    });
  },[])
  

  const handleClick=()=>{

      getfit(query).then( (response) =>{
        console.log(response.data);
        setdata(response.data)
      }).catch( (error)=> {
        console.error(error);
      });

    
  }

  const showClick=(el)=>{

    onOpen()
    setval(el)
    
  }


  return (
    <Box>
    <Box  h='380px' bgImage='url("https://thumbs.dreamstime.com/b/group-smiling-people-sport-uniform-holding-word-fitness-cartoon-colorful-vector-illustration-group-smiling-people-125210734.jpg")' bgSize='cover' bgPosition="center">
   <Box p='10px' bg='rgba(0,0,0, 0.4)' h='100%' display='flex' flexDir='column' alignItems='center' justify='center' textAlign='center'  >
    <Text fontSize='4xl' pt='20px' letterSpacing='1px' textAlign='center'   fontWeight='600'>Find Your Perfect Exersise</Text>
   <br/>
   <Text as='em' fontWeight='500' pt='10px' > "To enjoy the glow of goodhealth, you must exercise." </   Text>
   <br/>
    <Text as='cite' fontWeight='500' >- Gene Tunney</Text>

   <Box display='flex' flexDir={{base:"column",sm:"column",md:"row",lg:"row", xl: 'row'}} gap='10px' w={{base:"80%",sm:"80%",md:"50%",lg:"30%", xl: '30%'}} m='auto' pt='20px'>
   <Input placeholder='Search Exercise' onChange={handleChange} _placeholder={{ opacity: 1,    color: 'black', fontSize:'18px' }} />
    <Button onClick={handleClick} ><Text fontWeight='600' >Search</Text ></Button>
   </Box>
  </Box>
</Box>
{val? <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{val.name}</ModalHeader>
      <ModalCloseButton />
      <ModalBody display='flex' flexDir='column'  justify="center">
      <Image h='300px' w='100%' src={val.gifUrl} alt={val.name}/>
      <Box>
        <Text>Equipment : {val.equipment}</Text>
        <Text>BodyPart : {val.bodyPart}</Text>
        <Text>Target : {val.target}</Text>
        <Link href={val.gifUrl} isExternal>
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
      return <Fitnesscomp key={index} bodyPart={el} onClick={()=>showClick(el)}/>
    })}
  </Grid>



</Box>
  )
}

export default Fitness
