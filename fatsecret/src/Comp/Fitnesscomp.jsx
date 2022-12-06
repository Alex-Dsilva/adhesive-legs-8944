
import {  Box, Button, Grid, GridItem, Image, List, ListIcon, ListItem } from '@chakra-ui/react'
import { AiTwotonePlusCircle } from 'react-icons/ai'
import React from 'react'

const Fitnesscomp = ({key,bodyPart,onClick}) => {
  // console.log(res)

  const property = {
    imageUrl: bodyPart.gifUrl,
    imageAlt: 'Image loading error',
    name:bodyPart.name,
    target: bodyPart.target,
    id: bodyPart.id,
  }

  return (
    <Box key={property.id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >
        <Image src={property.imageUrl} alt={property.imageAlt} />
  
        <Box p='6' display='flex' flexDir='column' justify="center"  gap='5px'>
  
          <Box 
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {property.title}
          </Box>
          <Box  >
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='sm'
              textTransform='uppercase'
            >
              Exersise  : {property.name} 
            </Box>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='sm'
              textTransform='uppercase'
            >
              Target  : {property.target} 
            </Box>
          </Box>
          <Button onClick={onClick} mt='5'>View more</Button>
        </Box>
        
      </Box>
  )
}

export default Fitnesscomp

