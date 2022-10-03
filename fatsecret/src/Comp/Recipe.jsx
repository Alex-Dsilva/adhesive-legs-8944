
import {  Box, Button, Grid, GridItem, Image, List, ListIcon, ListItem } from '@chakra-ui/react'
import { AiTwotonePlusCircle } from 'react-icons/ai'
import React from 'react'

const Recipe = (res,key,onClick) => {
  // console.log(res)

  const property = {
    imageUrl: res.recipe.image,
    imageAlt: 'Image loading error',
    dish: res.recipe.dishType,
    type: res.recipe.cuisineType,
    title: res.recipe.label,
  }

  return (
    <Box key={key} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >
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
              Type  : {property.dish} 
            </Box>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='sm'
              textTransform='uppercase'
            >
              cuisine  : {property.type} 
            </Box>
          </Box>
          <Button onClick={res.onClick} mt='5'>View more</Button>
        </Box>
        
      </Box>
  )
}

export default Recipe

