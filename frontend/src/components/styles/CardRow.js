import React from 'react';
import styled from 'styled-components'
import ProductAddToCart from './Card.js'
// Row of Cards

  import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Center
  } from '@chakra-ui/react';


  const CardRow = () => {
    return (
        <Center alignItems="center" justifyContent="center">
            <Flex  w="sm" alignItems="center" justifyContent="center" position="auto">
                <ProductAddToCart />
                <ProductAddToCart />
                <ProductAddToCart />
            </Flex>
        </Center>
    );
  }
  
  export default CardRow;