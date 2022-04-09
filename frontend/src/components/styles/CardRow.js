import React from 'react';

import ProductCard from './Card.js'
// Row of Cards

  import {
    Flex,
    Center
  } from '@chakra-ui/react';


  const CardRow = ({products}) => {
    //props should be an object with a list of Product objects(id, name, price, etc.)
    //Dereference prop for each product to assign to a ProductCard that will take its info
    //When passing props to child object, you can reference the props in the child object
    //with props.propNameYouPassedFromParent 



    //data is list of products, pass a product as a prop to each ProductCard
    const data = products;
    

    return (
        <Center alignItems="center" justifyContent="center">
            <Flex  w="sm" alignItems="center" justifyContent="center" position="auto">
                <ProductCard item={data[0]} />
                <ProductCard item={data[1]}/>
                <ProductCard item={data[2]} />
            </Flex>
        </Center>
    );
  }
  
  export default CardRow;