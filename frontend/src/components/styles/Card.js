import React from 'react';
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, incrementQty, updateCartTotal } from './../../cartSlice.js';



import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  Tooltip, Button
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';




// JSON response received from 
const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};


const Rating = ({ rating, numReviews }) => {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}


const AddToCartButton = (props) => {
  //Need to change how our shopping cart works; when we add an item to cart, check to see if its id exists already
  // in the cart, if so, update the quantity for that ID in the cart
  // cartSlice will handle this logic

  const cardInfo = props.info
  const dispatch = useDispatch()

  const handleAddToCart = (info) => {
    dispatch(addToCart(info));
    dispatch(updateCartTotal());
  }

  return(
    <Tooltip
      label="Add to cart"
      bg="white"
      placement={'top'}
      color={'gray.800'}
      fontSize={'1.2em'}>
      <Button onClick={() => dispatch(handleAddToCart(cardInfo))} display={'flex'}>
        <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
      </Button>
    </Tooltip>  
  )
}



const ProductCard = (props) => {
  const information = props.item
  return (
    <Flex p={50} w="sm" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {/*
        {itemInfo.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )} */}

        <Image
          src={props.item.img}
          alt={`Picture of ${props.item.name}`}
          roundedTop="sm"
          height="358px"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {/*}
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )} */}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              
              w="250px"
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {props.item.name}
            </Box>
            {/* ADDTOCART BUTTON COMPONENT HERE
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <Button href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </Button>
            </Tooltip>
             */}
            <AddToCartButton info={information}/>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={props.item.rating} numReviews={props.item.numReviews} />
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {props.item.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;