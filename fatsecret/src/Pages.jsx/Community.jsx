import { Box, Button, Input, Text, Grid, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image, Link } from '@chakra-ui/react'
import { ExternalLinkIcon, StarIcon } from '@chakra-ui/icons'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import {reviews }from '../Comp/com'




const Community = () => {

  const [data,setdata]=useState(reviews)


console.log(data)



  return (
    <Box mt='8'>
      <Box textAlign='center'>
       <Text as='b' fontSize='3xl'  >Reviwes</Text> 
      {data.map((el)=>{
        return(
          <Box p='20px' w='50%' m='auto' borderWidth='1px' mb='20px' textAlign='left'>
            <Text>{el.platform_specific.pros}</Text>
            <Text>{el.platform_specific.user_company_name}</Text>
            <Box display='flex' mt='2' >
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < el.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {el.rating} reviews
          </Box>
        </Box>
          </Box>
        )
      })}
      </Box>
    </Box>
  )
}

export default Community










